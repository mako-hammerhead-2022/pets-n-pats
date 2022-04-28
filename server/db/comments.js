const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

// function getAllComments(db = connection) {
//   return db('comments').select()
// }

function insertComment(comment, db = connection) {
    return db('comments').insert({
      petID: comment.petID,
      authId: comment.authId,
      content: comment.content
    })
}

module.exports = {
  insertComment,
}
