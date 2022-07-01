const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const db = require('../pets')

const { dbTestPet, dbNewPet } = require('~/test/fake-data')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getTwoRandomPets', () => {
  it('should return a random cat and a random dog', () => {
    return db.getTwoRandomPets(testDb).then((pets) => {
      expect(pets).toHaveProperty('cat')
      expect(pets).toHaveProperty('dog')
      expect(pets.cat.animal).toContain('cat')
    })
  })
})

describe('getPetsByUserId', () => {
  it('returns the correct pets array', () => {
    return db.getPetsByUserId('auth0|something', testDb).then((pets) => {
      expect(pets).toHaveLength(5)
      expect(pets[0].name).toBe('Orel')
      return null
    })
  })
})
describe('getPetById', () => {
  it('should get the pet given the id', () => {
    return db.getPetById(2, testDb).then((pet) => {
      console.log(pet)
      expect(pet).toEqual({
        ...dbTestPet,
        createdAt: expect.anything(),
        updatedAt: expect.anything(),
      })
    })
  })
})

describe('addPet', () => {
  it('should add a pet', () => {
    return db
      .addPet(dbNewPet, testDb)
      .then(([{ id }]) => {
        return db.getPetById(id, testDb)
      })
      .then((pet) => {
        expect(pet).toEqual({
          ...dbNewPet,
          createdAt: expect.anything(),
          updatedAt: expect.anything(),
          points: expect.any(Number),
          id: 6,
        })
      })
  })
})

describe('addPoints', () => {
  it('should add 2 points', () => {
    return db
      .addPoints(4, testDb)
      .then(() => db.getWinnerById(4, testDb))
      .then((pet) => {
        expect(pet.points).toEqual(83 + 2)
      })
  })
})
