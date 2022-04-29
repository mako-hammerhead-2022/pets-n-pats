import { combineReducers } from 'redux'
import myPetsReducer from './myPets'

export default combineReducers({
  pets: myPetsReducer
})
