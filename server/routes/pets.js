const express = require('express')
const router = express.Router()

const db = require('../db')
const { checkJwt } = require('../utils')

router.get('/', (req, res) => {
  db.getTwoRandomPets()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.get('/my', checkJwt, (req, res) => {
  const userId = req.user?.sub
  db.getPetsByUserId(userId)
    .then((userPets) => {
      res.json(userPets)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.post('/', checkJwt, (req, res) => {
  const formData = req.body
  console.log(formData)
  db.addPet(formData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.patch('/', checkJwt, (req, res) => {
  const petData = req.body
  db.updatePet(petData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

module.exports = router
