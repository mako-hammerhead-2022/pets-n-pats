const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { insertComment } = require('../comments')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('insertComment', () => {
  it('inserts comment into comments table', () => {
    const comment = {
      petId: 5,
      authorId: "auth0|something",
      content: "petId 5 is stinky"     
    }
    expect.assertions(2)
    return insertComment(comment, testDb)
    .then(() => {
      return testDb('comments').select()
    })
    .then((db) =>{
      console.log(`db return:`, db)
      expect(db[3].content).toContain('stinky')
      expect(db).toHaveLength(4)
    })
    })
})