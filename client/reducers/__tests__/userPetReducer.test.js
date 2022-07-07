import myPetsReducer from '@/reducers/myPets'
import { receiveUserPets, requestUserPets, setUserPetsError } from '@/actions'

describe('myPetsReducer', () => {
  const pets = [
    { id: 4, name: 'bob' },
    { id: 20, name: 'bill' },
  ]
  it('can get pets by user id', () => {
    // Arrange

    const action = receiveUserPets(pets)

    const initialState = {
      data: [],
      loading: true,
      error: null,
    }

    const expectedOutputState = {
      data: pets,
      loading: false,
      error: null,
    }

    // Act
    const actualOutputState = myPetsReducer(initialState, action)

    // Assert
    expect(actualOutputState).toEqual(expectedOutputState)
  })
  it('set error correctly', () => {
    const initialState = {
      data: pets,
      loading: true,
      error: null,
    }

    const action = setUserPetsError('sadness')

    const expectedOutputState = {
      data: pets,
      loading: false,
      error: 'sadness',
    }

    // Act
    const actualOutputState = myPetsReducer(initialState, action)

    // Assert
    expect(actualOutputState).toEqual(expectedOutputState)
  })
  it('set loading correctly', () => {
    const initialState = {
      data: pets,
      loading: false,
      error: null,
    }

    const action = requestUserPets()

    const expectedOutputState = {
      data: pets,
      loading: true,
      error: null,
    }

    // Act
    const actualOutputState = myPetsReducer(initialState, action)

    // Assert
    expect(actualOutputState).toEqual(expectedOutputState)
  })
})
