import request from 'superagent'
import getPetsByUserId from '../apiClient'
// import * as exampleActions from './examplePath'

export const REQUEST_USER_PETS = 'REQUEST_USER_PETS'
export const SHOW_ERROR = 'SHOW_ERROR'
// export default {
//   // ...exampleActions,
// }

export function requestUserPets(pets) {
  return {
    type: REQUEST_USER_PETS,
    payload: { pets },
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function fetchUserPets(userId) {
  // https://github.com/whai-2022/pets-n-pats/projects/1

  return (dispatch) => {
    // acess api -> pets
    getPetsByUserId(userId)
      .then((pets) => {
        dispatch(requestUserPets(pets))
      })

      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
