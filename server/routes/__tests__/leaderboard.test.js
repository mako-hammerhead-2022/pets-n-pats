const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

const { petsWithScores } = require('~/test/fake-data')

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
  it('returns an objects for all the pets', () => {
    const firstExpected = {
      id: 1,
      name: 'Betty',
      imageUrl: '["https://wallpaperaccess.com/full/2378663.jpg"]',
      animal: 'dog',
      points: 13,
    }
    expect.assertions(3)
    db.getPetsWithPoints.mockReturnValue(Promise.resolve(petsWithScores))
    return request(server)
      .get('/api/leaderboard')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(3)
        expect(res.body[0]).toEqual(firstExpected)
      })
  })
  it("should return status 500 and error when database doesn't work", () => {
    expect.assertions(2)
    db.getPetsWithPoints.mockImplementation(() =>
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
