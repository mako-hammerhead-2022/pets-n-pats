import { fetchTwoPets, RECEIVE_RANDOM_TWO_PETS, SET_ERROR } from '../pets'
import api from '../../apiClient'
import { objTwoPet } from '../../../__mockdata__/mockPetData'

jest.mock('../../apiClient')

const fakeDispatch = jest.fn()
api.getRandomPets.mockReturnValue(Promise.resolve(objTwoPet))

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  console.log.mockRestore()
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
  it('should return an error when api returns a rejected promise', () => {
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    api.getRandomPets.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    expect.assertions(1)
    return fetchTwoPets()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ERROR,
        errMessage: 'Something went wrong',
      })
    })
  })
})