const express = require('express')
const router = express.Router()

const db = require('../db')
const { checkJwt } = require('../utils')

router.post('/', checkJwt, (req, res) => {
  const { petId, content } = req.body
  const auth0Id = req.user?.sub
  const newComment = {
    petId,
    authorId: auth0Id,
    content,
  }
  db.insertComment(newComment)
    .then(() => {
      return res.status(200).send({ message: 'Successful' })
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/:petId', checkJwt, (req, res) => {
  const userId = req.user?.sub
  const petId = req.params.petId
  db.getCommentsByPetId(userId, petId)
    .then((response) => {
      res.json(response)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
