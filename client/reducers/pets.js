const initialState = {
  data: { cat: null, dog: null },
  loading: true,
  error: null,
}

import { pets_receiveData, pets_setError, pets_requestData } from '@/actions'

export default function pets(state = initialState, action) {
  switch (action.type) {
    case pets_receiveData:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      }
    case pets_requestData:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case pets_setError:
      return {
        ...state,
        loading: false,
        error: action.errMessage,
      }
    default:
      return state
  }
}
