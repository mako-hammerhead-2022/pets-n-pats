const express = require('express')
const router = express.Router()

const db = require('../db')
const checkJwt = require('../auth0')

router.get('/', (req, res) => {
  db.getAllPets()
    .then((data) => {
      //TODO this is ok for now but would be better to put the random logic into the db
      // checkout http://www.titov.net/2005/09/21/do-not-use-order-by-rand-or-how-to-get-random-rows-from-table/
      // for the test use a spy on Math.random to get predictable random numbers
      const randomAnimal = (animalLength) => {
        return Math.floor(Math.random() * animalLength)
      }
      const cats = data.filter((element) => element.animal == 'cat')
      const dogs = data.filter((element) => element.animal == 'dog')
      const randomCat = cats[randomAnimal(cats.length)]
      const randomDog = dogs[randomAnimal(dogs.length)]
      res.json({ cat: randomCat, dog: randomDog })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

<<<<<<< HEAD
router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  console.log(userId, "userId")
  db.getPetsByUserId(userId)
    .then((userPets) => {
      res.json(userPets)
    })
    .catch((err) => {
      console.log(err, "err")
      console.log(err.message, "err.message")
      res.status(500).send(err.message)
=======
router.post('/', checkJwt, (req, res) => {
  const formData = req.body;
  db.addPet(formData)
    .then((pet) => {
      res.json(pet)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
>>>>>>> dev
    })
})

module.exports = router
