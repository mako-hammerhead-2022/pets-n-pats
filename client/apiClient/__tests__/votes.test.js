import nock from 'nock'
import { postVotes, postVotesTie } from '@/apiClient'
import { arrTwoPet } from '~/test/fake-data'

describe('postVotes', () => {
  test('calls /api/votes/add with the correct params', async () => {
    const scope = nock('http://localhost')
      .patch('/api/votes/add')
      .reply(200, arrTwoPet[1])

    const response = await postVotes(arrTwoPet[1])

    expect(response).toStrictEqual(arrTwoPet[1])
    scope.done()
  })
})

describe('postVotesTie', () => {
  test('calls /api/votes/addTie with the correct params', async () => {
    const scope = nock('http://localhost')
      .patch('/api/votes/addTie')
      .reply(200, arrTwoPet[0], arrTwoPet[1])

    const response = await postVotesTie(arrTwoPet[0], arrTwoPet[1])

    expect(response).toStrictEqual(arrTwoPet[0], arrTwoPet[1])
    scope.done()
  })
})
