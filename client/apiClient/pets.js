import request from 'superagent'

export function getPetsByUserId(userId) {
  return request.get(`/api/pets/${userId}`).then((res) => res.body)
}