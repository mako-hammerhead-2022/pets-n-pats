import myPetsReducer from '@/reducers/myPets'
import { userPets_receieveData } from '@/actions'

describe('myPetsReducer', () => {
  it('can get pets by user id', () => {
    // arrange
    const action = {
      type: userPets_receieveData,
      payload: { pets: [{ name: 'bob', id: 4 }] },
    }

    const inputState = [{ name: 'bill', id: 20 }]
    const expectedOutputState = [{ id: 4, name: 'bob' }]

    // act
    const outputState = myPetsReducer(inputState, action)

    // assert

    expect(outputState).toEqual(expectedOutputState)
  })
})
