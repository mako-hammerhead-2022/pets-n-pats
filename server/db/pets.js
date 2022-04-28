const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllPets(db = connection) {
  return db('pets').select()
}

function getPetById(id, db = connection) {
  return db('pets').where('id', id).select().first()
}

function addPet(data, db = connection){
  return db('pets').insert(data)
    .then(res => {
      return getPetById(res[0])
    })
}

module.exports = {
  getAllPets,
  getPetById,
  addPet,
}
