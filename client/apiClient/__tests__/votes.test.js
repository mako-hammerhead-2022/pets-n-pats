import nock from 'nock'
import { postVotes } from '@/apiClient'
import { arrTwoPet } from '~/test/fake-data'

describe('postVotes', () => {
  test('calls /api/v1/votes/add with the correct params', async () => {
    const scope = nock('http://localhost')
      .patch('/api/votes/add')
      .reply(200, arrTwoPet[1])

    const response = await postVotes(arrTwoPet[1])
    console.log(response)

    expect(response.points).toBe(arrTwoPet[1].points)
    scope.done()
  })
})

describe('postVotesTie', () => {
  it.todo('calls /api/votes/addTie with the correct params')
})

// describe('POST /api/comments', () => {
//   test('post request to api route to add comment to db', async () => {
//     const scope = nock('http://localhost')
//       .post('/api/comments')
//       .reply(200, objComment)

//     const commentRes = await postComment(objComment)
//     expect(commentRes.content).toBe(objComment.content)
//     scope.done()
//   })
// })
