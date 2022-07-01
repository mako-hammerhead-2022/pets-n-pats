import nock from 'nock'
import { getRandomPets, addPet } from '@/apiClient'
import { objTwoPet, apiClientPet } from '~/__mockdata__/mockPetData'

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

describe('addPet', () => {
  it('should return the new pet', async () => {
    expect.assertions(1)
    nock('http://localhost')
      .post('/api/pets', apiClientPet)
      .reply(201, { id: 10, ...apiClientPet })

    const data = await addPet(apiClientPet)
    expect(data).toEqual({ id: 10, ...apiClientPet })
  })
})
