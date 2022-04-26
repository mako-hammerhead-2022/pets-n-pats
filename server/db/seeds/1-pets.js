/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('pets').insert([
    {
      id: 1,
      // replace with your own auth0Id when developing
      userId: 'auth0|something',
      name: 'Orel',
      // the bios are automatically generated (thanks David for Mockaroo)
      // feel free to change them if your are on a bio related ticket
      bio: 'Ameliorated dedicated extranet',
      // imageUrl is null here, uses fallback image when queried for
      animal: 'dog',
      points: 0,
    },
    {
      id: 2,
      userId: 'auth0|something',
      name: 'Aileen',
      bio: 'Fully-configurable intermediate focus group',
      imageUrl: 'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
      animal: 'dog',
      points: 11,
    },
    {
      id: 3,
      userId: 'auth0|something',
      name: 'Giralda',
      bio: 'Customizable holistic conglomeration',
      imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
      animal: 'cat',
      points: 17,
    },
    {
      id: 4,
      userId: 'auth0|something',
      name: 'Letizia',
      bio: 'Open-architected systemic groupware',
      imageUrl: 'https://images.dog.ceo/breeds/tervuren/yoda_in_garden.jpg',
      animal: 'dog',
      points: 83,
    },
    {
      id: 5,
      userId: 'auth0|something',
      name: 'Dominique',
      bio: 'Reverse-engineered intermediate data-warehouse',
      imageUrl: 'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg',
      animal: 'cat',
      points: 190,
    },
  ])
}
