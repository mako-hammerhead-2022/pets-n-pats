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

function getCommentsByPetId(userId, petId, db = connection) {
  return db('comments')
    .join('pets', 'pets.id', 'comments.petId')
    .select(
      'comments.petId as petId',
      'comments.authorId as authorId',
      'comments.content as content',
      'pets.userId as userId',
      'pets.name as name'
    )
    .where({ 'comments.petId': petId, 'pets.userId': userId })
    .first()
}
module.exports = {
  insertComment,
  getCommentsByPetId,
}
