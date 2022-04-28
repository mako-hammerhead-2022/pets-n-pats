// import * as exampleApi from './examplePath'
import * as s3Api from './s3'
import * as petsApi from './pets'

export default {
  ...s3Api,
  ...petsApi
}
 