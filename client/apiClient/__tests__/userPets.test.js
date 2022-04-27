// const request = require('supertest')
// const server = require('./server')
// const db = require('./db')

// import nock from 'nock'

// test('GET /api/v1/', () => {
//   const scope = nock('http://')
//     .get('/r/bananas.json')
//     .reply(200, { data: { children: { msg: 'yay, bananas' } } })

//   return request(server)
//     .get('/api/v1/')
//     .expect(200)
//     .then((res) => {
//       expect(res.body.msg).toBe('yay, bananas')
//       scope.done()
//       return null
//     })
// })