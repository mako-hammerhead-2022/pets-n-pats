const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

import { arrTwoPet, dbNewPet } from '../../../__mockdata__/mockPetData'

jest.mock('../../db')

beforeAll(() => {
  jest.spyOn(console, 'log')
  console.log.mockImplementation(() => {})
  console.log(console.log)
})
afterAll(() => {
  console.log.mockRestore()
  jest.restoreAllMocks()
})

describe('GET /api/pets', () => {
  it('returns all pets from db', () => {
    expect.assertions(3)
    db.getAllPets.mockReturnValue(Promise.resolve(arrTwoPet))
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

describe('POST /api/pets', () => {
  it('adds a pet to the database and returns the new pet', () => {
    expect.assertions(2)
    db.addPet.mockReturnValue(Promise.resolve(dbNewPet))
    return request(server)
      .post('/api/pets')
      .send(dbNewPet)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(dbNewPet)
      })
  })
  it("should return status 500 and error when database doesn't work", () => {
    expect.assertions(2)
    db.addPet.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .post('/api/pets')
      .send(dbNewPet)
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
