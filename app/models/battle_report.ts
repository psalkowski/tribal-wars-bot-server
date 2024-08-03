import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

interface ReportArmy {
  spear: { sent: number; lost: number }
  sword: { sent: number; lost: number }
  axe: { sent: number; lost: number }
  archer: { sent: number; lost: number }
  spy: { sent: number; lost: number }
  light: { sent: number; lost: number }
  marcher: { sent: number; lost: number }
  heavy: { sent: number; lost: number }
  ram: { sent: number; lost: number }
  catapult: { sent: number; lost: number }
  knight: { sent: number; lost: number }
  snob: { sent: number; lost: number }
  militia: { sent: number; lost: number }
}

export default class BattleReport extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare status: number

  @column()
  declare luck: number

  @column()
  declare attackerVillageId: number

  @column()
  declare attackerPlayerId: number

  @column()
  declare attackerX: number

  @column()
  declare attackerY: number

  @column({
    consume: (value) => JSON.parse(value),
  })
  declare attackerArmy: ReportArmy

  @column()
  declare defenderVillageId: number

  @column()
  declare defenderPlayerId: number

  @column()
  declare defenderX: number

  @column()
  declare defenderY: number

  @column({
    consume: (value) => JSON.parse(value),
  })
  declare defenderArmy: ReportArmy

  @column()
  declare lootedWood: number

  @column()
  declare lootedIron: number

  @column()
  declare lootedStone: number

  @column()
  declare lootedTotal: number

  @column()
  declare lootCapacity: number

  @column.dateTime({
    prepare: (value) => DateTime.fromMillis(value).toFormat('yyyy-MM-dd HH:mm:ss.SSS'),
    serialize: (value: DateTime) => {
      if (typeof value === 'number') {
        return value
      }

      return value.toMillis()
    },
  })
  declare battleAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
