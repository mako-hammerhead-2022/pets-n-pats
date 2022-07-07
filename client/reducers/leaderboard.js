const initialState = {
  leaderboard: [],
  loading: true,
  error: null,
}

import {
  leaderboard_receiveData,
  leaderboard_setError,
  leaderboard_requestData,
} from '@/actions'

export default function leaderboard(state = initialState, action) {
  switch (action.type) {
    case leaderboard_receiveData:
      return {
        ...state,
        leaderboard: action.leaderboard,
        error: null,
        loading: false,
      }
    case leaderboard_setError:
      return {
        ...state,
        loading: false,
        error: action.errMessage,
      }
    case leaderboard_requestData:
      return {
        ...state,
        loading: true,
        error: null,
      }
    default:
      return state
  }
}
