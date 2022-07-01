const initialState = []

import { pets_receiveData, pets_setError, pets_requestData } from '@/actions'

export default function pets(state = initialState, action) {
  switch (action.type) {
    case pets_receiveData:
      return {
        ...state,
        data: action.pets,
        error: null,
      }
    case pets_setError:
      return {
        ...state,
        loading: false,
        error: action.errMessage,
      }
    case pets_requestData:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
