// TODO: test pets_requestData, pets_setError
import { pets_receiveData } from '../../actions/pets'
import petsReducer from '../pets'
import { objTwoPet } from '../../../__mockdata__/mockPetData'

describe('pets reducer', () => {
  it('receives two random pets, one cat, one dog', () => {
    const action = {
      type: pets_receiveData,
      pets: objTwoPet,
    }
    const inputState = { data: [], error: null, loading: false }
    const expectedOutputState = objTwoPet
    const outputState = petsReducer(inputState, action)

    expect(outputState.data).toEqual(expectedOutputState)
    expect(outputState.data).toHaveProperty('cat')
    expect(outputState).not.toBe(inputState)
  })
})
