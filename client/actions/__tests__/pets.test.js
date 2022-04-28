import { fetchTwoPets, RECEIVE_RANDOM_TWO_PETS } from '../pets'
import api from '../../apiClient'
import { objTwoPet } from '../../../__mockdata__/mockPetData'

jest.mock('../../apiClient')
const fakeDispatch = jest.fn()
api.getRandomPets.mockReturnValue(Promise.resolve(objTwoPet))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchTwoPets', () => {
  it('calls api and dispatches results in action', () => {
    expect.assertions(1)
    return fetchTwoPets()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: RECEIVE_RANDOM_TWO_PETS,
        pets: objTwoPet,
      })
    })
  })
})
