const express = require('express')
const router = express.Router()

router.get('*', (req, res) => {
  res.status(404).send('<h1>Error 404 not found!</h1>')
})

module.exports = router
