const express = require('express')
const router = express.Router()

const generatePreSignedPutUrl = require('../generateSignedUrl')
const checkJwt = require('../auth0')

router.post('/', checkJwt, async (req, res) => {
  const { fileName, fileType } = req.body
  const signedUrl = await generatePreSignedPutUrl(fileName, fileType)
  res.json({ signedUrl })
})

module.exports = router
