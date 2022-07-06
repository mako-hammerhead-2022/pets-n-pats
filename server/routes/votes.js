const express = require('express')
const router = express.Router()

const db = require('../db')

router.patch('/add', (req, res) => {
  const winnerId = req.body.winnerId
  db.addPoints(winnerId, 2)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => res.status(500).send(err.message))
})

router.patch('/addTie', (req, res) => {
  const catId = req.body.catId
  const dogId = req.body.dogId
  db.addPoints(catId, 1)
    .then(() => {
      db.addPoints(dogId, 1)
        .then(() => {
          res.sendStatus(200)
        })
        .catch((err) => res.status(500).send(err.message))
    })
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
