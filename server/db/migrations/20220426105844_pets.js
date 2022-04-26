/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.string('userId').notNullable()
    table.string('name').notNullable()
    table.string('bio')
    table
      .string('imageUrl')
      .defaultTo('https://wallpaperaccess.com/full/2378663.jpg')
    table.enu('animal', ['cat', 'dog'])
    table.integer('points').defaultTo(0)
    table.timestamps(true, true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('pets')
}
