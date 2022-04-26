/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await Promise.all([
    knex('pets').del(),
    // knex('exampleTable').del(),
  ])
}
