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

describe('getAllPets', () => {
  it('should return all pets', () => {
    return db.getAllPets(testDb).then((pets) => {
      expect(pets).toHaveLength(5)
    })
  })
})

// check how many points my pet had (ex: 5 points)
// check that it has two more points than before
// describe('addPoints', () => {
//   it('should add 2 points', () => {
//     return db.addPoints(4, upda)
//   })
// })

// db.addPoints(winnerId)
// .then(() => db.getWinnerById(winnerId))
// .then((points) => {
// NOTE TO SELF: check that points is two more than at start
// })
