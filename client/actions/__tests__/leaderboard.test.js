import {
  fetchSortedPets,
  leaderboard_receiveData,
  leaderboard_setError,
} from '@/actions'
import * as api from '@/apiClient'
import { petsWithScores } from '~/test/fake-data'

jest.mock('@/apiClient')

const fakeDispatch = jest.fn()
api.getAllPetsSortedByPoints.mockReturnValue(Promise.resolve(petsWithScores))

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  console.error.mockRestore()
})

describe('fetchSortedPets', () => {
  it('calls the api and dispatches the results to receiveData action', () => {
    expect.assertions(1)
    return fetchSortedPets()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: leaderboard_receiveData,
        leaderboard: petsWithScores,
      })
    })
  })
  it('returns an error when the api promise is rejected', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    api.getAllPetsSortedByPoints.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    expect.assertions(1)
    return fetchSortedPets()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: leaderboard_setError,
        errMessage: 'Something went wrong',
      })
    })
  })
})
