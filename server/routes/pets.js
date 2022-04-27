const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getAllPets()
  .then((data) => {
    const randomAnimal = (animalLength) => {return Math.floor(Math.random() * animalLength)}
    const cats =  data.filter((element) => element.animal == 'cat')
    const dogs =  data.filter((element) => element.animal == 'dog')
    const randomCat = cats[randomAnimal(cats.length)]
    const randomDog = dogs[randomAnimal(dogs.length)]
    res.json({cat: randomCat, dog: randomDog})
   })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

module.exports = router
