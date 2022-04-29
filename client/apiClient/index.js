import * as commentApi from './comments'
import * as votesApi from './votes'
import * as getRandomPets from './pets'

export default {
  ...commentApi,
  ...votesApi,
  ...getRandomPets,
}
