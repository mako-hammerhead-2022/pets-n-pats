const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

import { arrTwoPet, objTwoPet } from '../../../__mockdata__/mockPetData'

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
  it('returns two pets from db', () => {
    expect.assertions(3)
    db.getAllPets.mockReturnValue(Promise.resolve(objTwoPet))
    return request(server)
      .get('/api/pets')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('cat')
        expect(res.body.cat.name).toBe('Cthulu')
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

describe('PATCH/api/votes/add', () => {
  beforeEach(() => {
    // jest.clearAllMocks()
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    console.log(console.log)
  })
  afterEach(() => {
    console.log.mockRestore()
  })
  it('rendering add page', () => {
    expect.assertions(1)
    db.addPoints.mockReturnValue(Promise.resolve(arrTwoPet))
    return request(server)
      .patch('/api/votes/add')
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
  it('should return status 500 and error when database does not work', () => {
    expect.assertions(2)
    db.addPoints.mockImplementation(() => {
      return Promise.reject(new Error('Something went wrong'))
    })
    return request(server)
      .patch('/api/votes/add')
      .then((res) => {
        console.log('line 69: ', res)
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
