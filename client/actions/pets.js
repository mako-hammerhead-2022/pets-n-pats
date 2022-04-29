import api from '../apiClient'
export const RECEIVE_RANDOM_TWO_PETS = 'RECEIVE_RANDOM_TWO_PETS'
export const SET_ERROR = 'SET_ERROR'

export function receiveRandomPets(pets) {
  return {
    type: RECEIVE_RANDOM_TWO_PETS,
    pets: pets,
  }
}

// #2 function fetchtwopets hits the api and receives the cat and dog data.
// #3 is a Promise with a .then to handle the return data
export function fetchTwoPets() {
  return (dispatch) => {
    return api
      .getRandomPets()
      .then((res) => {
        // #4 passes the return data into the action (reciveRandomPets)
        // #5 It then dispatches that return to the reducer
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
