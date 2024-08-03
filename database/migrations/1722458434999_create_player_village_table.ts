import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'player_village'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.boolean('farm_enabled')

      table.integer('village_id').unsigned().references('villages.id')
      table.integer('player_id').unsigned().references('players.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.unique(['village_id', 'player_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
