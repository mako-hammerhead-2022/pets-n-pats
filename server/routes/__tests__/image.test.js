const request = require('supertest')
const server = require('../../server')

const generatePreSignedPutUrl = require('../../generateSignedUrl')
import checkJwt from '../../auth0'

jest.mock('../../generateSignedUrl')

jest.mock('../../auth0')

beforeAll(() => {
  checkJwt.mockImplementation((req, res, next) => {
    next()
  })
})
afterAll(() => {
  jest.restoreAllMocks()
})

describe('POST /api/image', () => {
  it('should return back an image url', () => {
    expect.assertions(1)
    generatePreSignedPutUrl.mockReturnValue(Promise.resolve('image.jpg'))
    return request(server)
      .post('/api/image')
      .send({ fileName: 'filename', fileType: 'filetype' })
      .then((res) => {
        expect(res.body.signedUrl).toBe('image.jpg')
      })
  })
})
