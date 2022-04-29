import api from '../apiClient'
export const REQUEST_USER_PETS = 'REQUEST_USER_PETS'
export const SHOW_ERROR = 'SHOW_ERROR'

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

export function fetchUserPets(token) {
  return (dispatch) => {
    return api
      .getUserPets(token)
      .then((pets) => {
        dispatch(requestUserPets(pets))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
