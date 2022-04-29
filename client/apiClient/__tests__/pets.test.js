import nock from 'nock'
import { getRandomPets } from '../pets'
import { objTwoPet } from '../../../__mockdata__/mockPetData'

describe('GET /api/pets/', () => {
  test('Requests server route to get 2 random pet objects', async () => {
    const scope = nock('http://localhost')
      .get('/api/pets/')
      .reply(200, objTwoPet)

    const { cat, dog } = await getRandomPets()
    expect(cat.name).toBe('Cthulu')
    expect(cat.id).toBe(6)
    expect(dog.name).toBe('The Balrog')
    expect(dog.id).toBe(5)
    scope.done()
  })
})
