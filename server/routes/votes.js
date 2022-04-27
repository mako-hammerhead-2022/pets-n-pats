const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/add', (req, res) => {
  // db
  console.log(db)
  console.log(req.body.winnerId)
  res.sendStatus(200)
})

module.exports = router
