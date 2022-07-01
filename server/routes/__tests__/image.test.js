const request = require('supertest')
const server = require('../../server')

const { checkJwt, generatePreSignedPutUrl } = require('../../utils')

jest.mock('../../utils')

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
