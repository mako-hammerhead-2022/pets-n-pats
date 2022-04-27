const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

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
      Promise.resolve([
        {
          id: 3,
          userId: 'auth0|something',
          name: 'Giralda',
          bio: 'Customizable holistic conglomeration',
          imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
          animal: 'cat',
          points: 17,
          createdAt: '2022-04-26 22:28:54',
          updatedAt: '2022-04-26 22:28:54',
        },
        {
          id: 4,
          userId: 'auth0|something',
          name: 'Letizia',
          bio: 'Open-architected systemic groupware',
          imageUrl: 'https://images.dog.ceo/breeds/tervuren/yoda_in_garden.jpg',
          animal: 'dog',
          points: 83,
          createdAt: '2022-04-26 22:28:54',
          updatedAt: '2022-04-26 22:28:54',
        },
      ])
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
