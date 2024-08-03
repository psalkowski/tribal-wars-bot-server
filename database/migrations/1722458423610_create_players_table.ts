import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'players'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name')
      table.string('world_id', 5)
      table.integer('tribal_id').unsigned()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.unique(['world_id', 'tribal_id'])
      table.foreign('world_id').references('worlds.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
