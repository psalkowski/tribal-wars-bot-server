import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Village from '#models/village'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Player extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare farmEnabled: boolean

  @manyToMany(() => Village, {
    pivotColumns: ['farm_enabled'],
    pivotTimestamps: true,
  })
  declare villages: ManyToMany<typeof Village>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
