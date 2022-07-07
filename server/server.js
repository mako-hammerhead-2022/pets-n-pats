if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = require('dotenv').config()
  if (envConfig.error) throw envConfig.error
}
const express = require('express')
const path = require('path')
const fs = require('fs')
const { send } = require('process')
const server = express()

server.use(express.static(path.resolve(__dirname, '../dist')))

server.use(express.json())

server.use('/api/pets', require('./routes/pets'))
server.use('/api/image', require('./routes/image'))
server.use('/api/comments', require('./routes/comments'))
server.use('/api/votes', require('./routes/votes'))
server.use('/api/*', (req, res) => {
  return res.sendStatus(404)
})

server.get('*', (req, res) => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, '../dist/index.html'),
      'utf8'
    )

    res.send(html)
  } catch (err) {
    if (err.message.includes('no such file or directory')) {
      return res
        .status(404)
        .send('dist folder not found, try running `npm run build`')
    }
    return res.status(500).send('something went wrong')
  }
})

module.exports = server
