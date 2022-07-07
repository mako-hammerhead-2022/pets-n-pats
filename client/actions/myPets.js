import * as api from '@/apiClient'

export const userPets_receiveData = 'userPets/receiveData'
export function receiveUserPets(pets) {
  return {
    type: userPets_receiveData,
    payload: pets,
  }
}

export const userPets_setError = 'userPets/setError'
export function setUserPetsError(errorMessage) {
  return {
    type: userPets_setError,
    errorMessage: errorMessage,
  }
}

export const userPets_requestData = 'userPets/requestData'
export function requestUserPets() {
  return {
    type: userPets_requestData,
  }
}

export function fetchUserPets(token) {
  return (dispatch) => {
    dispatch(requestUserPets())
    return api
      .getUserPets(token)
      .then((pets) => dispatch(receiveUserPets(pets)))
      .catch((err) => dispatch(setUserPetsError(err.message)))
  }
}
