if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = require('dotenv').config()
  if (envConfig.error) throw envConfig.error
}
const express = require('express')
const path = require('path')
const fs = require('fs')
const server = express()

const imageRoutes = require('./routes/image')

server.use(express.static(path.resolve(__dirname, '../dist')))
server.use(express.static(path.resolve(__dirname, './public')))

server.use(express.json())

server.use('/api/pets', require('./routes/pets'))
server.use('/api/image', imageRoutes)
server.use('/api/comments', require('./routes/comments'))
server.use('/api/votes', require('./routes/votes'))

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
