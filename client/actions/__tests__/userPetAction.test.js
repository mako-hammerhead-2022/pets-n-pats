// import nock from 'nock'

import { REQUEST_USER_PETS, SHOW_ERROR, fetchUserPets } from '../index'

// import * as actions from '../index'
import { getPetsByUserId } from '../../apiClient/pets'
import { fakePets } from '../../../__mockdata__/mockPetData'

jest.mock('../../apiClient/pets')
const fakeDispatch = jest.fn()
getPetsByUserId.mockReturnValue(Promise.resolve(fakePets))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchUserPets', () => {
  it('dispatches', async () => {
    expect.assertions(1)
    const thunkFn = fetchUserPets(6)
    await thunkFn(fakeDispatch)
    const firstAction = fakeDispatch.mock.calls[0][0]
    expect(firstAction.type).toEqual(REQUEST_USER_PETS)
  })
  it('dispatches error when api call fails', () => {
    getPetsByUserId.mockImplementation(() =>
      Promise.reject(new Error('sadness'))
    )
    expect.assertions(2)
    return fetchUserPets(6)(fakeDispatch).finally(() => {
      const secondAction = fakeDispatch.mock.calls[0][0]
      expect(secondAction.type).toEqual(SHOW_ERROR)
      expect(secondAction.errorMessage).toBe('sadness')
    })
  })
})
