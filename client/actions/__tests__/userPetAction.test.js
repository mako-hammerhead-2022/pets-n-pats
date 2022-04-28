// import nock from 'nock'

import { REQUEST_USER_PETS, SHOW_ERROR, fetchUserPets } from '../index'

// import * as actions from '../index'
import { getPetsByUserId } from '../../apiClient/pets'

const fakePets = [
  {
    id: 1,
    userId: '6',
    name: 'Orel',
    bio: 'Ameliorated dedicated extranet',
    imageUrl: 'https://wallpaperaccess.com/full/2378663.jpg',
    animal: 'dog',
    points: 0,
    createdAt: '2022-04-27 02:30:29',
    updatedAt: '2022-04-27 02:30:29',
  },
  {
    id: 3,
    userId: '6',
    name: 'Giralda',
    bio: 'Customizable holistic conglomeration',
    imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
    animal: 'cat',
    points: 17,
    createdAt: '2022-04-27 02:30:29',
    updatedAt: '2022-04-27 02:30:29',
  },
]

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
    console.log(fakeDispatch.mock.calls, 'fakeDispatch.mock.calls')
    const firstAction = fakeDispatch.mock.calls[0][0]
    console.log(firstAction)
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
