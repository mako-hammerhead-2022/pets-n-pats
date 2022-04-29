import request from 'superagent'

export async function addPet(formData, token) {
  return request
    .post('/api/pets')
    .set('authorization', `Bearer ${token}`)
    .send(formData)
    .then(res => {
      return res.body;
    })
}

export function getRandomPets() {
  return request.get('/api/pets/').then((response) => {
    return response.body
  })
}
