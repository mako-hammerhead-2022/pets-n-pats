const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllPets(db = connection) {
  return db('pets').select()
}

module.exports = {
  getAllPets,
}