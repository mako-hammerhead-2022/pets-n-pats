import {
  fetchTopTen,
  leaderboard_receiveData,
  leaderboard_setError,
} from '@/actions'
import * as api from '@/apiClient'
import { getTopTenPets } from '@/apiClient'
import { petsWithScores } from '~/test/fake-data'

jest.mock('@/apiClient')

const fakeDispatch = jest.fn()
api.getTopTenPets.mockReturnValue(Promise.resolve(petsWithScores))

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  console.error.mockRestore()
})

describe('fetchTopTen', () => {
  it('calls the api and dispatches the results to receiveData action', () => {
    expect.assertions(1)
    return fetchTopTen()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: leaderboard_receiveData,
        pets: petsWithScores,
      })
    })
  })
  it('returns an error when the api promise is rejected', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    api.getTopTenPets.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    expect.assertions(1)
    return fetchTopTen()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: leaderboard_setError,
        errMessage: 'Something went wrong',
      })
    })
  })
})
