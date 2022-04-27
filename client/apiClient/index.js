// import * as exampleApi from './examplePath'
import request from 'superagent'

export default function getPetsByUserId(userId) {
  return request.get(`/api/pets/${userId}`).then((res) => res.body)

  // ...exampleApi,
}

// need a function to get the pets by userId
