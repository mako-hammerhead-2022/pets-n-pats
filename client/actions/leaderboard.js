import * as api from '@/apiClient'

export const leaderboard_requestData = 'leaderboard/requestData'
export function requestTopTen() {
  return {
    type: leaderboard_requestData,
  }
}

export const leaderboard_receiveData = 'leaderboard/receiveData'
export function receiveTopTen(pets) {
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

export function fetchTopTen() {
  return (dispatch) => {
    dispatch(requestTopTen())
    return api
      .getTopTenPets()
      .then((pets) => {
        dispatch(receiveTopTen(pets))
      })
      .catch((err) => {
        console.error(err)
        dispatch(setLeaderboardError(err.message))
      })
  }
}
