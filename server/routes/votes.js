const express = require('express')
const router = express.Router()

const db = require('../db')

router.patch('/add', (req, res) => {
  //console.log('hit add route')
  const winnerId = req.body.winnerId
  console.log(req.body.winnerId)
  db.addPoints(winnerId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
