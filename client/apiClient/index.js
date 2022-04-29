import * as petsApi from './pets'
  
// import * as exampleApi from './examplePath'
import * as votesApi from './votes'
import * as getRandomPets from './pets'

export default {
  ...votesApi,
  ...getRandomPets,
  ...petsApi
}
