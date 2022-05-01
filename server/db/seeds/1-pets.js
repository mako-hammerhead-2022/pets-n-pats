/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('pets').insert({
    id: 1,
    userId: 'auth0|something',
    name: 'Orel',
    bio: 'Ameliorated dedicated extranet',
    animal: 'dog',
    points: 0,
  })
  return await knex('pets').insert([
    {
      id: 2,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Aileen',
      bio: 'Fully-configurable intermediate focus group',
      imageUrl: 'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
      animal: 'dog',
      points: 11,
    },
    {
      id: 3,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Giralda',
      bio: 'Customizable holistic conglomeration',
      imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
      animal: 'cat',
      points: 17,
    },
    {
      id: 4,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Letizia',
      bio: 'Open-architected systemic groupware',
      imageUrl: 'https://images.dog.ceo/breeds/tervuren/yoda_in_garden.jpg',
      animal: 'dog',
      points: 83,
    },
    {
      id: 5,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Dominique',
      bio: 'Reverse-engineered intermediate data-warehouse',
      imageUrl: 'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg',
      animal: 'cat',
      points: 190,
    },
    {
      id: 6,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Bob',
      bio: `For you I'll create, Artistic works of poo, since You save them in bags`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_6205.jpg',
      animal: 'dog',
      points: 2500,
    },
    {
      id: 7,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Bodhi',
      bio: 'Focused for four-legged fur friends fun, frolicking fast forever from fantastically frightening flickering ferns',
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/unknown2.png',
      animal: 'dog',
      points: 2500,
    },
    {
      id: 8,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Bean',
      bio: 'It is 2am, time to lick your face until you pat me',
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/76640151_417269875631782_438672244328103936_n.jpg',
      animal: 'cat',
      points: 50,
    },
    {
      id: 9,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Soxis',
      bio: `One step closer and I'll show you what-for`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/20200827_223755.jpg',
      animal: 'cat',
      points: 100,
    },
    {
      id: 10,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Missy',
      bio: 'Hold fast to dreams, For if dreams die, Life is a broken-winged bird, That cannot fly. Hold fast to dreams, For when dreams go, Life is a barren field, Frozen with snow.',
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_20220429_151501.jpg',
      animal: 'cat',
      points: 30,
    },
    {
      id: 11,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Mr. Piggy',
      bio: 'Carrots and hay I welcome, bacon and ham no thanks',
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/20210523_155753.jpg',
      animal: 'dog',
      points: 90,
    },
    {
      id: 12,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Bounty',
      bio: 'I want my mouse pad please',
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/SPOILER_13084240_10154139378190522_22079373_n.jpg',
      animal: 'dog',
      points: 30,
    },
    {
      id: 13,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Summer',
      bio: `I am snug. I am snug. Don't get mad, when I pee on rug.`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/Snapchat-2118970990__01.jpg',
      animal: 'dog',
      points: 200,
    },
    {
      id: 14,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Dixie',
      bio: 'wizard cat, she likes to walk up to you and cast spells',
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/20200912_202919.jpg',
      animal: 'cat',
      points: 125,
    },
    {
      id: 15,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Hugo',
      bio: `I'm hungry but my bowl is only 80% full, time to YELL`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/54DEEFAF-230F-4F18-B499-AC00966F533F.jpg',
      animal: 'cat',
      points: 130,
    },
    {
      id: 16,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Scout',
      bio: `I once met a dog from Peru, who'd freely walk up to you: "That dinner was swell, But I had to expel, So I need to you to pick up my poo.`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_4777.jpg',
      animal: 'cat',
      points: 125,
    },
    {
      id: 17,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Brazen',
      bio: `Violets are blue, roses are red. It's 2am, you'll sleep when you're dead`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_5928.jpg',
      animal: 'cat',
      points: 140,
    },
    {
      id: 18,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Frankie',
      bio: `Roses are blue, violets are red. I'm a dog I can't see colours`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_0057.jpg',
      animal: 'dog',
      points: 50,
    },
    {
      id: 19,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Jubbers',
      bio: `Jubbers loves towels,all towels belong to Jubbers.`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/unknown4.png',
      animal: 'dog',
      points: 190,
    },
    {
      id: 20,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Eriks Cat',
      bio: `Always sitting on the fence, never taking sides`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_6362.JPG',
      animal: 'cat',
      points: 125,
    },
    {
      id: 21,
      userId: 'google-oauth2|107865314401338889864',
      name: 'George',
      bio: `I'll take a rest and then clear out the pests`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_6307.JPG',
      animal: 'cat',
      points: 175,
    },
    {
      id: 22,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Barkley',
      bio: `I'm Barkley the builder! Lets go to Bunnings!`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_7948.JPG',
      animal: 'cat',
      points: 110,
    },
    {
      id: 23,
      userId: 'google-oauth2|107865314401338889864',
      name: 'Baldy',
      bio: `You're The Best Evil Son An Evil Dad Could Ever Ask For.`,
      imageUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_7586.PNG',
      animal: 'cat',
      points: 125,
    },
  ])
}
