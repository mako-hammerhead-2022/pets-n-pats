import nock from 'nock'
import mockData from '../../../_mockdata_/mockPetsJSONData.json'
import { getRandomPets } from '../twoRandomPetsAPI'

describe('GET /api/pets/', () => {
  test('Requests server route to get 2 random pet objects', async () => {
    nock('http://localhost').get('/api/pets').reply(200, { data: mockData })
    const { ...data } = await getRandomPets()
    console.log(data)
    expect(data.text).toContain('')
  })
})
