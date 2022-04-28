import pets from '../index'
import { arrTwoPet, objTwoPet } from '../../../__mockdata__/mockPetData'

describe.skip('pets Reducer', () => {
  it('receives two random pets, one cat, one dog', () => {
    const action = {
      type: 'RECEIVE_RANDOM_TWO_PETS',
      payload: objTwoPet,
    }
    const inputState = []
    const expectedOutputState = arrTwoPet
    const outputState = pets(inputState, action)

    expect(outputState).toEqual(expectedOutputState)
    // assert that we haven't 'mutated' our state
    expect(outputState).not.toBe(inputState)
  })
})
