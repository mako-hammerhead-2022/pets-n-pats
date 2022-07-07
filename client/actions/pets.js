import * as api from '@/apiClient'

export const pets_receiveData = 'pets/receiveData'
export function receiveRandomPets(pets) {
  return {
    type: pets_receiveData,
    payload: pets,
  }
}

export const pets_setError = 'pets/setError'
export function setPetsError(errorMessage) {
  return {
    type: pets_setError,
    errorMessage: errorMessage,
  }
}

export const pets_requestData = 'pets/requestData'
export function requestRandomPets() {
  return {
    type: pets_requestData,
  }
}

export function fetchTwoPets() {
  return (dispatch) => {
    dispatch(requestRandomPets())
    return api
      .getRandomPets()
      .then((pets) => dispatch(receiveRandomPets(pets)))
      .catch((err) => dispatch(setPetsError(err.message)))
  }
}
