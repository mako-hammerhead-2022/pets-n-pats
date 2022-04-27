const request = require('supertest')
const server = require('../../server')
const db = require('../../db')
const mockData = require('./mockData.json')

jest.mock('../../db')

describe('GET /api/pets', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    console.log(console.log)
  })
  afterEach(() => {
    console.log.mockRestore()
  })
  it('returns all pets from db', () => {
    expect.assertions(3)
    db.getAllPets.mockReturnValue(
      Promise.resolve(mockData)
    )
    return request(server)
      .get('/api/pets')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('cat')
        expect(res.body.cat.name).toBe('Giralda')
      })
  })
  it("should return status 500 and error when database doesn't work", () => {
    expect.assertions(2)
    db.getAllPets.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/pets')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})