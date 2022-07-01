import * as api from '@/apiClient'
export const userPets_receieveData = 'userPets/receieveData'
export const userPets_requestData = 'userPets/requestData'
export const userPets_setError = 'userPets/setError'

export function receieveUserPets(pets) {
  return {
    type: userPets_receieveData,
    payload: { pets },
  }
}

export function setUserPetsError(errorMessage) {
  return {
    type: userPets_setError,
    errorMessage: errorMessage,
  }
}

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
      .then((pets) => {
        dispatch(receieveUserPets(pets))
        return null
      })
      .catch((err) => {
        dispatch(setUserPetsError(err.message))
      })
  }
}
