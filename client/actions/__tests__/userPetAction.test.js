import {
  userPets_receieveData,
  userPets_requestData,
  userPets_setError,
  fetchUserPets,
} from '@/actions'
import { getUserPets } from '@/apiClient'
import { fakePets } from '~/test/fake-data'

jest.mock('@/apiClient')
const fakeDispatch = jest.fn()

getUserPets.mockReturnValue(Promise.resolve(fakePets))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchUserPets', () => {
  it('dispatches', async () => {
    expect.assertions(3)
    const thunkFn = fetchUserPets(6)
    await thunkFn(fakeDispatch)
    const firstAction = fakeDispatch.mock.calls[0][0]
    const secondAction = fakeDispatch.mock.calls[1][0]
    expect(firstAction.type).toEqual(userPets_requestData)
    expect(secondAction.type).toEqual(userPets_receieveData)
    expect(secondAction.payload).toEqual({ pets: fakePets })
  })
  it('dispatches error when api call fails', () => {
    getUserPets.mockImplementation(() => Promise.reject(new Error('sadness')))
    expect.assertions(3)
    return fetchUserPets(6)(fakeDispatch).finally(() => {
      const firstAction = fakeDispatch.mock.calls[0][0]
      const secondAction = fakeDispatch.mock.calls[1][0]
      expect(firstAction.type).toEqual(userPets_requestData)
      expect(secondAction.type).toEqual(userPets_setError)
      expect(secondAction.errorMessage).toBe('sadness')
    })
  })
})
