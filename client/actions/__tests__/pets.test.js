import { fetchTwoPets, pets_receiveData, pets_setError } from '../pets'
import * as api from '../../apiClient'
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
        type: pets_receiveData,
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
        type: pets_setError,
        errMessage: 'Something went wrong',
      })
    })
  })
})
