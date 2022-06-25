import * as api from '../apiClient'
export const RECEIVE_RANDOM_TWO_PETS = 'RECEIVE_RANDOM_TWO_PETS'
export const SET_ERROR = 'SET_ERROR'

export function receiveRandomPets(pets) {
  return {
    type: RECEIVE_RANDOM_TWO_PETS,
    pets: pets,
  }
}

export function fetchTwoPets() {
  return (dispatch) => {
    return api
      .getRandomPets()
      .then((res) => {
        dispatch(receiveRandomPets(res))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
