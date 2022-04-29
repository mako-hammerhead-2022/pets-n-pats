import { REQUEST_USER_PETS } from '../actions'

const initialState = []

const myPetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_PETS:
      return action.payload.pets

    default:
      return state
  }
}
export default myPetsReducer
