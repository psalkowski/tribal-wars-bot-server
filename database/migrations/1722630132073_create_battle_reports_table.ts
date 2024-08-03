import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'battle_reports'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').unsigned().primary()

      table.string('status', 20)
      table.decimal('luck', 5, 2)

      table.integer('attacker_village_id').unsigned()
      table.integer('attacker_player_id').unsigned()
      table.integer('attacker_x', 3).unsigned()
      table.integer('attacker_y', 3).unsigned()
      table.json('attacker_army')

      table.integer('defender_village_id').unsigned()
      table.integer('defender_player_id').unsigned()
      table.integer('defender_x', 3).unsigned()
      table.integer('defender_y', 3).unsigned()
      table.json('defender_army')

      table.integer('looted_wood').unsigned()
      table.integer('looted_iron').unsigned()
      table.integer('looted_stone').unsigned()
      table.integer('looted_total').unsigned()
      table.integer('loot_capacity').unsigned()

      table.timestamp('battle_at', { precision: 3 })
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
