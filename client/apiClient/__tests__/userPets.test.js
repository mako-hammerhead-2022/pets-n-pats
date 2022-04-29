import nock from 'nock'
import { getUserPets } from '../pets.js'

const fakePets = [
  {
    id: 1,
    userId: '6',
    name: 'Orel',
    bio: 'Ameliorated dedicated extranet',
    imageUrl: 'https://wallpaperaccess.com/full/2378663.jpg',
    animal: 'dog',
    points: 0,
    createdAt: '2022-04-27 02:30:29',
    updatedAt: '2022-04-27 02:30:29',
  },
  {
    id: 3,
    userId: '6',
    name: 'Giralda',
    bio: 'Customizable holistic conglomeration',
    imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
    animal: 'cat',
    points: 17,
    createdAt: '2022-04-27 02:30:29',
    updatedAt: '2022-04-27 02:30:29',
  },
]

test('GET /api/pets/{userId}', () => {
  const scope = nock('http://localhost')
    .get('/api/pets/my')
    .reply(200, fakePets)

  return getUserPets('fakeToken').then((pets) => {
    expect(pets).toEqual(fakePets)
    scope.done()
    return null
  })
})

// [{"id":1,"userId":"6","name":"Orel","bio":"Ameliorated dedicated extranet","imageUrl":"https://wallpaperaccess.com/full/2378663.jpg","animal":"dog","points":0,"createdAt":"2022-04-27 02:30:29","updatedAt":"2022-04-27 02:30:29"},{"id":3,"userId":"6","name":"Giralda","bio":"Customizable holistic conglomeration","imageUrl":"https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg","animal":"cat","points":17,"createdAt":"2022-04-27 02:30:29","updatedAt":"2022-04-27 02:30:29"}]
