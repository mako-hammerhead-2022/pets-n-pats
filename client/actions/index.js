import request from 'superagent'
import getPetsByUserId from '../apiClient'
// import * as exampleActions from './examplePath'

export const REQUEST_USER_PETS = 'REQUEST_USER_PETS'
export const SHOW_ERROR = 'SHOW_ERROR'
// export default {
//   // ...exampleActions,
// }

export function requestUserPets(userId) {
  return {
    type: REQUEST_USER_PETS,
    payload: { pets, },
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function fetchUserPets(userId) {
  // we will get that state userid in componnents
  
  return (dispatch, state) => {
    // acess api -> pets
    dispatch(requestUserPets(pets))
    // getPetsByUserId(state.pets.userId)
    return request{
      getPetsByUserId()
      }
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
