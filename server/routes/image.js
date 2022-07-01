const express = require('express')
const router = express.Router()

const { checkJwt, generatePreSignedPutUrl } = require('../utils')

router.post('/', checkJwt, async (req, res) => {
  const { fileName, fileType } = req.body
  const signedUrl = await generatePreSignedPutUrl(fileName, fileType)
  res.json({ signedUrl })
})

module.exports = router
