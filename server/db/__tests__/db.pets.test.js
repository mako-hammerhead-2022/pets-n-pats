const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const db = require('../pets')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

const newPet = {
  userId: 'auth0|testId',
  name: 'TestBoy',
  bio: 'A good boy',
  imageUrl: 'https://images.dog.ceo/restboy.jpg',
  animal: 'dog',
}

const testPet = {
  id: 2,
  userId: 'auth0|something',
  name: 'Aileen',
  bio: 'Fully-configurable intermediate focus group',
  imageUrl: 'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
  animal: 'dog',
  points: 11,
}

describe('getAllPets', () => {
  it('should return all pets', () => {
    return db.getAllPets(testDb).then((pets) => {
      expect(pets).toHaveLength(5)
    })
  })
})

describe('getPetById', () => {
  it('should get the pet given the id', () => {
    return db.getPetById(2, testDb)
      .then(pet => {
        expect(pet).toEqual({...testPet, createdAt: expect.anything(), updatedAt: expect.anything()})
      })
  })
})

describe('addPet', () => {
  it('should add a pet', () => {
    return db.addPet(newPet, testDb).then((pet) => {
      expect(pet).toEqual({...newPet, createdAt: expect.anything(), updatedAt: expect.anything(), points: expect.any(Number), id: 6})
    })
  })
})