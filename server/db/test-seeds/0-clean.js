/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('comments').del()
}
