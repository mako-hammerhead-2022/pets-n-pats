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

export function fetchUserPets(userId) {
  return (dispatch) => {
    return api
      .getPetsByUserId(userId)
      .then((pets) => {
        dispatch(requestUserPets(pets))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
