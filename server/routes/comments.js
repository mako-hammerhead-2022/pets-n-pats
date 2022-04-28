const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  const comment = req.body
  console.log(`req.body:`, req.body)
  db.insertComment(comment)
  .then((commentRes) => {
    return res.json(commentRes)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
