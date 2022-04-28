import nock from 'nock'
import { addPet } from '../pets'

const formData = {
  userId: 2,
  name: 'Bob',
  bio: 'random bio',
  animal: 'cat',
  imageUrl: 'image.jpg',
}

describe('addPet', () => {
  it('should return the new pet', async () => {
    expect.assertions(1)
    nock('http://localhost')
      .post('/api/pets', formData)
      .reply(201, { id: 10, ...formData })

    const data = await addPet(formData)
    expect(data).toEqual({ id: 10, ...formData })
  })
})