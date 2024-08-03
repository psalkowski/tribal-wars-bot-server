import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'farm_commands'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('world_id', 5)
      table.integer('source_x')
      table.integer('source_y')
      table.integer('target_x')
      table.integer('target_y')
      table.integer('duration')
      table.integer('spear').defaultTo(0)
      table.integer('sword').defaultTo(0)
      table.integer('axe').defaultTo(0)
      table.integer('archer').defaultTo(0)
      table.integer('spy').defaultTo(0)
      table.integer('light').defaultTo(0)
      table.integer('marcher').defaultTo(0)
      table.integer('heavy').defaultTo(0)
      table.integer('ram').defaultTo(0)
      table.integer('catapult').defaultTo(0)
      table.integer('knight').defaultTo(0)
      table.integer('snob').defaultTo(0)

      table.timestamp('arrive_at', { precision: 3 })
      table.timestamp('return_at', { precision: 3 })

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.foreign('world_id').references('worlds.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
