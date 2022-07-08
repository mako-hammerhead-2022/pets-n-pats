import request from 'superagent'

export function getUserPets(token) {
  return request
    .get(`/api/pets/my`)
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body)
}

export async function addPet(formData, token) {
  return request
    .post('/api/pets')
    .set('authorization', `Bearer ${token}`)
    .send(formData)
    .then((res) => {
      return res.body
    })
}

export function updatePet(petData, token) {
  return request
    .patch('/api/pets/')
    .set('authorization', `Bearer ${token}`)
    .send(petData)
    .then((res) => res.body)
}

export function getRandomPets() {
  return request.get('/api/pets/').then((response) => {
    return response.body
  })
}

export function getTopTenPets() {
  return request.get('/api/leaderboard').then((response) => {
    return response.body
  })
}
