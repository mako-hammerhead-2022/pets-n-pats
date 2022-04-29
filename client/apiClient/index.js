import * as petsApi from './pets'
import * as votesApi from './votes'

export default {
  ...votesApi,
  ...petsApi,
}
