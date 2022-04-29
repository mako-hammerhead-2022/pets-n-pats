import pets from '../pets'
import { objTwoPet } from '../../../__mockdata__/mockPetData'

describe('pets Reducer', () => {
  it('receives two random pets, one cat, one dog', () => {
    const action = {
      type: 'RECEIVE_RANDOM_TWO_PETS',
      pets: objTwoPet,
    }
    const inputState = []
    const expectedOutputState = objTwoPet
    const outputState = pets(inputState, action)

    expect(outputState).toEqual(expectedOutputState)
    expect(outputState).toHaveProperty('cat')
    expect(outputState).not.toBe(inputState)
  })
})
