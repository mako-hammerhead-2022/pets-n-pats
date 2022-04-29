import request from 'superagent'

export function getPetsByUserId(userId) {
  return request.get(`/api/pets/${userId}`).then((res) => res.body)
}
export function getRandomPets() {
  return request.get('/api/pets/').then((response) => {
    return response.body
  })
}
