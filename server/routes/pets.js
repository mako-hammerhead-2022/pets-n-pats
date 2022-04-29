const express = require('express')
const router = express.Router()

const db = require('../db')
const checkJwt = require('../auth0')

router.get('/', (req, res) => {
  db.getTwoRandomPets()
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.get('/:userId', (req, res) => {
  // TODO: use auth0
  const userId = req.params.userId
  console.log(userId, 'userId')
  db.getPetsByUserId(userId)
    .then((userPets) => {
      res.json(userPets)
    })
    .catch((err) => {
      console.log(err, 'err')
      console.log(err.message, 'err.message')
      res.status(500).send(err.message)
    })
  router.post('/', checkJwt, (req, res) => {
    const formData = req.body
    db.addPet(formData)
      .then((pet) => {
        res.json(pet)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ message: 'Something went wrong' })
      })
  })
})

module.exports = router
