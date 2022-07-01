import { userPets_receieveData } from '@/actions'

const initialState = []

const myPetsReducer = (state = initialState, action) => {
  // TODO: add loading and error state
  switch (action.type) {
    case userPets_receieveData:
      return action.payload.pets

    default:
      return state
  }
}
export default myPetsReducer
