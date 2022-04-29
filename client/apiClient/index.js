import * as s3Api from './s3'
import * as petsApi from './pets'
import * as commentApi from './comments'
import * as votesApi from './votes'

export default {
  ...s3Api,
  ...petsApi,
  ...commentApi,
  ...votesApi,
  ...petsApi,
}
