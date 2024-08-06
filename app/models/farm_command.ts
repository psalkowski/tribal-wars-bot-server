import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import World from '#models/world'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { prepareDateTime, serializeDateTime } from '../utils/date_time.js'

export default class FarmCommand extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare sourceX: number

  @column()
  declare sourceY: number

  @column()
  declare targetX: number

  @column()
  declare targetY: number

  @column()
  declare duration: number

  @column()
  declare worldId: string

  @column()
  declare spear: number

  @column()
  declare sword: number

  @column()
  declare axe: number

  @column()
  declare archer: number

  @column()
  declare spy: number

  @column()
  declare light: number

  @column()
  declare marcher: number

  @column()
  declare heavy: number

  @column()
  declare ram: number

  @column()
  declare catapult: number

  @column()
  declare knight: number

  @column()
  declare snob: number

  @hasOne(() => World)
  declare world: HasOne<typeof World>

  @column.dateTime({
    prepare: prepareDateTime,
    serialize: serializeDateTime,
  })
  declare arriveAt: DateTime

  @column.dateTime({
    prepare: prepareDateTime,
    serialize: serializeDateTime,
  })
  declare returnAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
