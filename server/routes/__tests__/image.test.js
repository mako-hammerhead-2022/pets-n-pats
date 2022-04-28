const request = require('supertest')
const server = require('../../server')

const generatePreSignedPutUrl = require('../../generateSignedUrl');

jest.mock('../../generateSignedUrl')

describe('POST /api/image', () => {
  it('should return back an image url', () => {
    expect.assertions(1)
    generatePreSignedPutUrl.mockReturnValue(Promise.resolve('image.jpg'))
    return request(server)
      .post('/api/image')
      .send({ fileName: 'filename', fileType: 'filetype' })
      .then(res => {
        expect(res.body.signedUrl).toBe('image.jpg')
      })
  })
})