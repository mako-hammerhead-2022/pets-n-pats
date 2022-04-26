const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../index.js')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getWidgets', () => {
  it('returns the correct widgets array', () => {
    return db.getWidgets(testDb).then((widgets) => {
      expect(widgets).toHaveLength(3)
      expect(widgets[0]).toHaveProperty('mfg')
      expect(widgets[1].inStock).toBe(8)
      return null
    })
  })
})
