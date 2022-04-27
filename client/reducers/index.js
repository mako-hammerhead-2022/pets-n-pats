import { combineReducers } from 'redux'
import petsReducer from './pets'

// import exampleReducer from './examplePath'

export default combineReducers({
  // example: exampleReducer,
  pets: petsReducer
})
