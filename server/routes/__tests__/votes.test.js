const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

jest.mock('../../db')

afterEach(() => {
  jest.clearAllMocks()
})

describe('PATCH /api/votes/add', () => {
  it('returns 200 when db function works', () => {
    db.addPoints.mockReturnValue(Promise.resolve())
    return request(server)
      .patch('/api/votes/add')
      .send({ winnerId: 3 })
      .expect(200)
      .then(() => {
        expect(db.addPoints).toHaveBeenCalledWith(3, 2)
        expect(db.addPoints).toHaveBeenCalledTimes(1)
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
        expect(db.addPoints).toHaveBeenCalledWith(3, 2)
        expect(db.addPoints).toHaveBeenCalledTimes(1)
      })
  })
})

//Tests the addTie button
describe('PATCH /api/votes/addTie', () => {
  it('returns 200 when db function works', () => {
    db.addPoints.mockReturnValue(Promise.resolve())
    return request(server)
      .patch('/api/votes/addTie')
      .send({ catId: 3, dogId: 5 })
      .expect(200)
      .then(() => {
        expect(db.addPoints).toHaveBeenCalledWith(3, 1)
        expect(db.addPoints).toHaveBeenCalledWith(5, 1)
        expect(db.addPoints).toHaveBeenCalledTimes(2)
      })
  })

  it('returns 500 when db function fails', () => {
    db.addPoints.mockImplementation(() =>
      Promise.reject(new Error('something went wrong'))
    )
    return request(server)
      .patch('/api/votes/addTie')
      .send({ catId: 3, dogId: 5 })
      .then((res) => {
        expect(db.addPoints).toHaveBeenCalledWith(3, 1)
        expect(db.addPoints).toHaveBeenCalledTimes(1)
        expect(res.status).toBe(500)
      })
  })
})
