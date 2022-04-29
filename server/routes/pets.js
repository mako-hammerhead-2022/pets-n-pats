const express = require('express')
const router = express.Router()

const db = require('../db')

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

module.exports = router
