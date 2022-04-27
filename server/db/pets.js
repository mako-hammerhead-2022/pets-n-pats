const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllPets(db = connection) {
  return db('pets').select()
}

function getPetsByUserId(userId, db = connection) {
  return db('pets').select().where('userId', userId)
}

module.exports = {
  getAllPets,
  getPetsByUserId,
}
// 'userId', 'name', 'bio', 'imageUrl', 'animal', 'points'
