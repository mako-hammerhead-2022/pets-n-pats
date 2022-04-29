const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

// get all of the pets
function getAllPets(db = connection) {
  return db('pets').select()
}

function getPetsByUserId(userId, db = connection) {
  return db('pets').select().where('userId', userId)
}
function getPetById(id, db = connection) {
  return db('pets').where('id', id).select().first()
}

function addPet(data, db = connection) {
  return db('pets')
    .insert(data)
    .then((res) => {
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
  getAllPets,
  getPetsByUserId,
  getPetById,
  addPet,
  addPoints,
  getWinnerById,
}
