/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.integer('petId').references('pets.id')
    table.string('authorId')
    table.string('content')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
