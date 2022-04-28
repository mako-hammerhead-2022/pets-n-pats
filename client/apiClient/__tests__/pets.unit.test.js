import nock from 'nock'
import { addPet } from '../pets'
import { apiClientPet } from '../../../__mockdata__/mockPetData'

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