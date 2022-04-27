import { RECEIVE_RANDOM_TWO_PETS } from '../actions/fetchTwoPets'


const initialState = []

export default function pets(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_RANDOM_TWO_PETS:
    return action.pets
    default:
     return state
  }
}
