import request from "superagent";

export function getRandomPets () {
  return request.get('/api/pets/').then((response) => {return response.text})
}