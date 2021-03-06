const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function insertComment(comment, db = connection) {
  return db('comments').insert({
    petId: comment.petId,
    authorId: comment.authorId,
    content: comment.content,
  })
}

module.exports = {
  insertComment,
}
