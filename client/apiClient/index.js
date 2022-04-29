// import * as exampleApi from './examplePath'
import * as s3Api from './s3'
import * as petsApi from './pets'
import * as votesApi from './votes'

export default {
  ...s3Api,
  ...petsApi,
  ...votesApi,
}
 