const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  const comment = req.body
  db.insertComment(comment)
  .then(() => {
    return res.status(200).success({message: 'Successful'})
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
