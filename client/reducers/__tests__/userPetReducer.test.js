import petsReducer from '../index'

describe('petsReducer', () => {
  it('can get pets by user id', () => {
    // arrange
    const action = {
      type: 'REQUEST_USER_PETS',
      payload: { pets: { name: 'bob', id: 4 } },
    }

    const inputState = { pets: { name: 'bill', id: 20 } }
    const expectedOutputState = {pets: { name: 'bob', id: 4 }}

    // act
    const outputState = petsReducer(inputState, action)
    console.log(outputState, 'outputState')
    console.log(expectedOutputState, 'expectedOutputState')

    // assert
    // ['John'] to Equal ['John']
    expect(outputState).toEqual(expectedOutputState)
    // assert that we haven't 'mutated' our state
    // expect(outputState).not.toBe(inputState)
  })
})
