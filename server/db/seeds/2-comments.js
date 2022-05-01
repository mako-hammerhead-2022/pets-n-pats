/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').insert([
    { petId: 2, authorId: 'auth0|something', content: 'Pet2 is the bomb' },
    { petId: 5, authorId: 'auth0|something', content: 'pet5 sucks' },
    {
      petId: 1,
      authorId: 'auth0|something',
      content: 'pet1 inspires nothing from me',
    },
  ])
}
