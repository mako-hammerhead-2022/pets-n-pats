import { RECEIVE_RANDOM_TWO_PETS } from '../actions/pets'

const initialState = []
export default function pets(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_RANDOM_TWO_PETS:
      // #6 it hits the case. You are inserting the pets data into state
      return action.pets
    default:
      return state
  }
}
