const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

import { objComment } from '~/test/fake-data'

jest.mock('../../db')

describe('POST /api/comments', () => {
  it('adding a comment hits the db', () => {
    db.insertComment.mockReturnValue(Promise.resolve(objComment))
    return request(server)
      .post('/api/comments')
      .send(objComment)
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
  it("should return status 500 and error when database doesn't work", () => {
    expect.assertions(2)
    db.insertComment.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .post('/api/comments')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
