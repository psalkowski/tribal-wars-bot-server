import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import World from '#models/world'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { prepareDateTime, serializeDateTime } from '../utils/date_time.js'

export default class Agent extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare ip: string

  @column()
  declare name: string

  @column()
  declare enabled: boolean

  @column()
  declare running: boolean

  @column()
  declare worldId: string

  @belongsTo(() => World)
  declare world: BelongsTo<typeof World>

  @column.dateTime({
    prepare: prepareDateTime,
    serialize: serializeDateTime,
  })
  declare startedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
