const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  return db
    .getPetsWithPoints()
    .then((pets) => {
      res.json(pets)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

module.exports = router
