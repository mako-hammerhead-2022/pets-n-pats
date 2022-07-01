import nock from 'nock'
import { postComment } from '@/apiClient'
import { objComment } from '~/test/fake-data'

describe('POST /api/comments', () => {
  test('post request to api route to add comment to db', async () => {
    const scope = nock('http://localhost')
      .post('/api/comments')
      .reply(200, objComment)

    const commentRes = await postComment(objComment)
    expect(commentRes.content).toBe(objComment.content)
    scope.done()
  })
})
