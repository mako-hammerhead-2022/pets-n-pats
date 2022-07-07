const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

jest.mock('../../db')

describe('PATCH /api/votes/add', () => {
  it('returns 200 when db function works', () => {
    db.addPoints.mockReturnValue(Promise.resolve())
    return request(server)
      .patch('/api/votes/add')
      .send({ winnerId: 3 })
      .expect(200)
      .then(() => {
        expect(db.addPoints).toHaveBeenCalledWith(3)
      })
  })

  it('returns 500 when db function fails', () => {
    db.addPoints.mockImplementation(() =>
      Promise.reject(new Error('something went wrong'))
    )
    return request(server)
      .patch('/api/votes/add')
      .send({ winnerId: 3 })
      .expect(500)
      .then(() => {
        expect(db.addPoints).toHaveBeenCalledWith(3)
      })
  })
})
