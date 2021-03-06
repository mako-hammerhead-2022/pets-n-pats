const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

import { objComment } from '~/test/fake-data'
const { checkJwt } = require('../../utils')

jest.mock('../../db')
jest.mock('../../utils')

beforeAll(() => {
  checkJwt.mockImplementation((req, res, next) => {
    req.user = { sub: objComment.authorId }
    next()
  })
})

describe('POST /api/comments', () => {
  it('adding a comment hits the db', () => {
    expect.assertions(2)

    const dbFunction = db.insertComment.mockReturnValue(
      Promise.resolve(objComment)
    )

    return request(server)
      .post('/api/comments')
      .send(objComment)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(dbFunction).toHaveBeenCalledWith(objComment)
      })
  })

  it("should return status 500 and error when database doesn't work", () => {
    expect.assertions(2)

    db.insertComment.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )

    return request(server)
      .post('/api/comments')
      .send(objComment)
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
