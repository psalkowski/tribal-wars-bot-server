import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'agents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('ip')
      table.string('name')
      table.boolean('enabled')
      table.boolean('running')
      table.string('world_id', 5)
      table.timestamp('started_at')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.foreign('world_id').references('worlds.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
