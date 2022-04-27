import { getRandomPets } from "../apiClient/twoRandomPetsAPI"
export const RECEIVE_RANDOM_TWO_PETS = 'RECEIVE_RANDOM_TWO_PETS'

export function receiveRandomPets(pets) {
  return {
    type: RECEIVE_RANDOM_TWO_PETS,
    pets: pets
  }
}

export default function fetchTwoPets ()  {
    return (dispatch) => {
      return getRandomPets()
        .then((res) => {
          dispatch(receiveRandomPets(res))
           return null
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }