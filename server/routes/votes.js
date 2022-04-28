const express = require('express')
const router = express.Router()

const db = require('../db')

// patch the data in the database via the route: /api/votes/add
router.patch('/add', (req, res) => {
  const winnerId = req.body.winnerId
  console.log(winnerId)
  // const points = req.body.points
  // const updatedPoints = req.body
  // console.log(updatedPoints)
  // db.addPoints(winnerId, points)
  db.addPoints(winnerId)
    .then(() => db.getWinnerById(winnerId))
    .then((points) => {
      console.log(points)
      res.json({ ...points })
    })
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router

// THIS CODE IS CORRECT
// const express = require('express')
// const router = express.Router()

// const db = require('../db')

// // patch the data in the database via the route: /api/votes/add
// router.patch('/add', (req, res) => {
//   const winnerId = req.body.winnerId
//   db.addPoints(winnerId)
//     .then(() => {
//       res.sendStatus(200)
//     })
//     .catch((err) => res.status(500).send(err.message))
// })

// module.exports = router
