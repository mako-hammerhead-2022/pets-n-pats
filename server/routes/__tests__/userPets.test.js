const request = require('supertest')
const server = require('../../server')
const db = require('../../db/pets')

jest.mock('../../db/pets')

describe('GET /:userId', () => {
  test('gets the pets from the given userId', () => {
    db.getPetsByUserId.mockReturnValue(
      Promise.resolve([
        {
          id: 5,
          userId: '6',
          name: 'Dominique',
          bio: 'Reverse-engineered intermediate data-warehouse',
          imageUrl: 'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg',
          animal: 'cat',
          points: 190,
        },

        {
          userId: '6',
          name: 'Domin',
          bio: 'Reverse-engineered',
          imageUrl: 'https://',
          animal: 'dog',
          points: 140,
        },
      ])
    )

    const id = 6
    return request(server)
      .get(`/api/pets/${id}`)
      .then((res) => {
      
        expect(res.body).toHaveLength(2)
      })

  })

})

