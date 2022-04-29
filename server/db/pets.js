const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


async function getTwoRandomPets (db = connection) {
const randomAnimal = (animalLength) => {
    return Math.floor(Math.random() * animalLength)
}
const countOfCats  = await db('pets').count().where('animal', 'cat')
const countOfDogs  = await db('pets').count().where('animal', 'dog')
const catNumber = Object.values(countOfCats[0])[0]
const dogNumber = Object.values(countOfDogs[0])[0]
const randomCatNumber = randomAnimal(catNumber)
const randomDogNumber = randomAnimal(dogNumber)
const randomCat = await db.select().from('pets').where('animal', 'cat').limit(catNumber).offset(randomCatNumber).first()
const randomDog = await db.select().from('pets').where('animal', 'dog').limit(dogNumber).offset(randomDogNumber).first()
return {cat: randomCat, dog: randomDog}
}

function getPetById(id, db = connection) {
  return db('pets').where('id', id).select().first()
}

function addPet(data, db = connection){
  return db('pets').insert(data)
    .then(res => {
      return getPetById(res[0], db)
    })
}

// select the winner by id from the pets db
function getWinnerById(winnerId, db = connection) {
  return db('pets').select().where('id', winnerId).first()
}

// add points to the winner's points tally by id in the pets db
function addPoints(petId, db = connection) {
  return db('pets').increment('points', 2).where('id', petId)
}

module.exports = {
  getTwoRandomPets,
  getPetById,
  addPet,
  addPoints,
  getWinnerById,
}
