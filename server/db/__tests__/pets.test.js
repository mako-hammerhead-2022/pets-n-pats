const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getPetsByUserId', () => {
  it('returns the correct pets array', () => {
    return testDb.getPetsByUserId('6').then((pets) => {
      expect(pets.body).toHaveLength(3)
      console.log(pets)
      expect(pets[0].name).toBe('Orel')
      return null
    })
  })
})
