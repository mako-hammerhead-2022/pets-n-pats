const request = require('supertest')
const server = require('../../server')
const db = require('../../db/pets')

import { fakePets } from '../../../__mockdata__/mockPetData'


jest.mock('../../db/pets')

beforeEach(() => jest.clearAllMocks())

describe('GET /:userId', () => {
  test('gets the pets from the given userId', () => {
    db.getPetsByUserId.mockReturnValue(
      Promise.resolve(fakePets)
    )

    const id = 6
    return request(server)
      .get(`/api/pets/${id}`)
      .then((res) => {
      
        expect(res.body).toHaveLength(2)
      })

  })

  it('tests error in routes',() => {
    expect.assertions(1)
    const id = "6"
    db.getPetsByUserId.mockImplementation(() => Promise.reject(new Error('not working')))
    return request(server)
      .get(`/api/pets/${id}`)
      .then(res => {
        expect(res.status).toBe(500)
      })

  })
})

