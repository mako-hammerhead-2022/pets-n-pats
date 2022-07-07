import { combineReducers } from 'redux'
import myPetsReducer from './myPets'
import petsReducer from './pets'
import leaderboardReducer from './leaderboard'

export default combineReducers({
  myPets: myPetsReducer,
  pets: petsReducer,
  leaderboard: leaderboardReducer,
})
