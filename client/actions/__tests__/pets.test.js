import {
  fetchTwoPets,
  requestRandomPets,
  receiveRandomPets,
  setPetsError,
} from '@/actions'
import * as api from '@/apiClient'
import { objTwoPet } from '~/test/fake-data'

jest.mock('@/apiClient')

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
    expect.assertions(2)
    return fetchTwoPets()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith(requestRandomPets())
      expect(fakeDispatch).toHaveBeenCalledWith(receiveRandomPets(objTwoPet))
    })
  })

  it('should return an error when api returns a rejected promise', () => {
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    api.getRandomPets.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    expect.assertions(2)
    return fetchTwoPets()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith(requestRandomPets())
      expect(fakeDispatch).toHaveBeenCalledWith(
        setPetsError('Something went wrong')
      )
    })
  })
})
