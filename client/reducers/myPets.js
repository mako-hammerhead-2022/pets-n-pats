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
  // TODO: add loading and error state
  // const { data } = action.payload
  console.log(action)

  switch (action.type) {
    case userPets_receiveData:
      return {
        ...state,
        data: action.payload.pets,
        loading: false,
        error: null,
      }
    // case userPets_requestData:
    //   return something
    // case userPets_setError:
    //   return somethingElse
    default:
      return state
  }
}
export default myPetsReducer
