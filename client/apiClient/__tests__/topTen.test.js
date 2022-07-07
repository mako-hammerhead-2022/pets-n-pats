import nock from 'nock'
import { getTopTenPets } from '@/apiClient'
import { petsWithScores } from '~/test/fake-data'

test('GET /api/leaderboard', () => {
  //creates a fake server and route
  const scope = nock('http://localhost')
    .get('/api/leaderboard')
    .reply(200, petsWithScores)

  return getTopTenPets().then((pets) => {
    expect(pets).toEqual(petsWithScores)
    scope.done()
    return null
  })
})
