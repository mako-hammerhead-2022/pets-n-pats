const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const db = require('../pets')

const { dbTestPet, dbNewPet, dbTestCat } = require('~/test/fake-data')

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
    const INITIAL_POINTS = 83
    const NUM_POINTS_SCORED = 2
    const PET_ID = 4
    return db
      .addPoints(PET_ID, NUM_POINTS_SCORED, testDb)
      .then(() => db.getWinnerById(PET_ID, testDb))
      .then((pet) => {
        expect(pet.points).toEqual(INITIAL_POINTS + NUM_POINTS_SCORED)
      })
  })
})

describe('addPointsTie', () => {
  it('should add 1 point to each animal', () => {
    const INITIAL_POINTS1 = 11
    const INITIAL_POINTS2 = 190
    const NUM_POINTS_SCORED = 1

    const PET_ID1 = 2
    const PET_ID2 = 5
    return db
      .addPoints(PET_ID1, NUM_POINTS_SCORED, testDb)
      .then(() => db.getPetById(PET_ID1, testDb))
      .then((pet) => {
        console.log('pet1', pet)
        expect(pet.points).toEqual(INITIAL_POINTS1 + NUM_POINTS_SCORED)
        return db.addPoints(PET_ID2, NUM_POINTS_SCORED, testDb)
      })
      .then(() => db.getPetById(PET_ID2, testDb))
      .then((pet) => {
        console.log('PET2!', pet)
        expect(pet.points).toEqual(INITIAL_POINTS2 + NUM_POINTS_SCORED)
      })
  })
})
