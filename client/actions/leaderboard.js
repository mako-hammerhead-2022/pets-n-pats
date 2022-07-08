import * as api from '@/apiClient'

export const leaderboard_requestData = 'leaderboard/requestData'
export function requestSortedPets() {
  return {
    type: leaderboard_requestData,
  }
}

export const leaderboard_receiveData = 'leaderboard/receiveData'
export function receiveSortedPets(pets) {
  return {
    type: leaderboard_receiveData,
    leaderboard: pets,
  }
}

export const leaderboard_setError = 'leaderboard/setError'
export function setLeaderboardError(errMessage) {
  return {
    type: leaderboard_setError,
    errMessage,
  }
}

export function fetchSortedPets() {
  return (dispatch) => {
    dispatch(requestSortedPets())
    return api
      .getAllPetsSortedByPoints()
      .then((pets) => {
        dispatch(receiveSortedPets(pets))
      })
      .catch((err) => {
        console.error(err)
        dispatch(setLeaderboardError(err.message))
      })
  }
}
