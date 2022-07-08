const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

const { makeTestAnimals } = require('~/test/fakeDataHelper')

jest.mock('../../db')

beforeAll(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
})
afterAll(() => {
  console.error.mockRestore()
  jest.restoreAllMocks()
})

describe('GET /api/leaderboard', () => {
  it('returns 50 pet objects sorted by most points', () => {
    const petsWithScores = makeTestAnimals(50)

    const firstExpected = petsWithScores[0]
    expect.assertions(3)
    db.getAllPetsSortedByPoints.mockReturnValue(Promise.resolve(petsWithScores))
    return request(server)
      .get('/api/leaderboard')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(petsWithScores.length)
        expect(res.body[0]).toEqual(firstExpected)
      })
  })
  it("should return status 500 and error when database doesn't work", () => {
    expect.assertions(2)
    db.getAllPetsSortedByPoints.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/leaderboard')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
