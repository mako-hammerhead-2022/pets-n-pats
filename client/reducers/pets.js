import { REQUEST_USER_PETS } from '../actions'
import getPetsByUserId from '../apiClient'

const initialState = []

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_PETS:
      return getPetsByUserId(action.payload.userId)

    default:
      return state
  }
}
export default petsReducer
