import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import World from '#models/world'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Village extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare x: number

  @column()
  declare y: number

  @column()
  declare farmEnabled: boolean

  @column()
  declare gid: number

  @hasOne(() => World)
  declare world: HasOne<typeof World>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
