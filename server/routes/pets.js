const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getAllPets()
    .then((pets) => {
      res.json({ pets })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  console.log(userId)
  db.getPetsByUserId(userId)
    .then((userPets) => {
      console.log(userPets)
      res.json(userPets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
