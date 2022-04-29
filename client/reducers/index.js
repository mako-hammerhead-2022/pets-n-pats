import { combineReducers } from 'redux'
import myPetsReducer from './myPets'
import petsReducer from './pets'

export default combineReducers({
  myPets: myPetsReducer,
  pets: petsReducer,
})
