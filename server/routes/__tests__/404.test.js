const request = require('supertest')
const server = require('../../server')

describe('GET /api/1234', () => {
  it('returns 404 status', () => {
    return request(server)
      .get('/api/*')
      .then((res) => {
        expect(res.status).toBe(404)
      })
  })
})
