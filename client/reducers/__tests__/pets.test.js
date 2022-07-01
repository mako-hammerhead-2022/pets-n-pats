// TODO: test pets_requestData, pets_setError
import { pets_receiveData } from '@/actions'
import petsReducer from '@/reducers/pets'
import { objTwoPet } from '~/test/fake-data'

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
