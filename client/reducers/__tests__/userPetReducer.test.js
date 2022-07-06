import myPetsReducer from '@/reducers/myPets'
import { userPets_receiveData } from '@/actions'

describe('myPetsReducer', () => {
  it('can get pets by user id', () => {
    // Arrange
    const action = {
      type: userPets_receiveData,
      payload: [
        { id: 4, name: 'bob' },
        { id: 20, name: 'bill' },
      ],
    }

    const initialState = {
      data: [],
      loading: true,
      error: null,
    }

    const expectedOutputState = {
      data: [
        { id: 4, name: 'bob' },
        { id: 20, name: 'bill' },
      ],
      loading: false,
      error: null,
    }

    // Act
    const actualOutputState = myPetsReducer(initialState, action)

    // Assert
    expect(actualOutputState).toEqual(expectedOutputState)
    expect(actualOutputState.data).toHaveLength(2)
    expect(actualOutputState.loading).toBeFalsy()
  })
})
