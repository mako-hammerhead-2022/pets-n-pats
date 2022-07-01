const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

const { arrTwoPet, dbNewPet, objTwoPet } = require('~/test/fake-data')
const { checkJwt } = require('../../utils')

jest.mock('../../db')
jest.mock('../../utils')

beforeAll(() => {
  jest.spyOn(console, 'log')
  console.log.mockImplementation(() => {})
  console.log(console.log)
  checkJwt.mockImplementation((req, res, next) => {
    next()
  })
})
afterAll(() => {
  console.log.mockRestore()
  jest.restoreAllMocks()
})

describe('GET /api/pets', () => {
  it('returns two pets from db', () => {
    expect.assertions(3)
    db.getTwoRandomPets.mockReturnValue(Promise.resolve(objTwoPet))
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
    db.getTwoRandomPets.mockImplementation(() =>
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
    expect.assertions(1)
    db.addPet.mockReturnValue(Promise.resolve([6]))
    return request(server)
      .post('/api/pets')
      .send(dbNewPet)
      .then((res) => {
        expect(res.status).toBe(201)
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

describe('PATCH/api/votes/add', () => {
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

describe('GET /my', () => {
  test('gets the pets from the given userId', () => {
    db.getPetsByUserId.mockReturnValue(Promise.resolve(arrTwoPet))

    return request(server)
      .get(`/api/pets/my`)
      .then((res) => {
        expect(res.body).toHaveLength(2)
      })
  })

  it('tests error in routes', () => {
    expect.assertions(1)
    db.getPetsByUserId.mockImplementation(() =>
      Promise.reject(new Error('not working'))
    )
    return request(server)
      .get(`/api/pets/my`)
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
