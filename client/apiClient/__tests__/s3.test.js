import nock from 'nock'
import { getImageUrl } from '../s3'

const initialFile = {
  name: 'filename',
  type: 'filetype',
}

const fileToSend = {
  fileName: 'filename',
  fileType: 'filetype',
}

describe('getImageUrl', () => {
  it('should return the image url', async () => {
    expect.assertions(1)
    nock('http://localhost').post('/api/image', fileToSend).reply(201, {
      signedUrl:
        'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/elephant_small.png?a-whole-bunch-of-random-stuff',
    })

    nock('https://pets-n-pats.s3.ap-southeast-2.amazonaws.com')
      .put('/elephant_small.png?a-whole-bunch-of-random-stuff')
      .reply(201)

    const imageUrl = await getImageUrl(initialFile)
    expect(imageUrl).toBe(
      'https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/elephant_small.png'
    )
  })
})
