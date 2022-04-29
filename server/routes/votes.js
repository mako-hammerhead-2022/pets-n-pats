const express = require('express')
const router = express.Router()

const db = require('../db')

router.patch('/add', (req, res) => {
  const winnerId = req.body.winnerId
  db.addPoints(winnerId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
