import {
  userPets_receiveData,
  userPets_requestData,
  userPets_setError,
} from '@/actions'

const initialState = {
  data: [],
  loading: true,
  error: null,
}

const myPetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case userPets_receiveData:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      }
    case userPets_requestData:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case userPets_setError:
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
      }
    default:
      return state
  }
}
export default myPetsReducer
