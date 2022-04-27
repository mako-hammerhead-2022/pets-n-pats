import request from "superagent";

function getRandomPets () {
  return request.get('/api/pets/').then((response) => {return response.text})
}

export default getRandomPets