import {
  leaderboard_receiveData,
  leaderboard_setError,
  leaderboard_requestData,
} from '@/actions'
import leaderboardReducer from '@/reducers/leaderboard'
import { petsWithScores } from '~/test/fake-data'

describe('top 10 pets reducer', () => {
  it('receives 10 top scoring pets', () => {
    const action = {
      type: leaderboard_receiveData,
      leaderboard: petsWithScores,
    }
    const inputState = { data: [], error: null, loading: false }
    const expectedOutputState = petsWithScores
    const actualOutputState = leaderboardReducer(inputState, action)

    expect(actualOutputState.leaderboard).toEqual(expectedOutputState)
    expect(actualOutputState).not.toBe(inputState)
  })

  it('sends an error', () => {
    const action = {
      type: leaderboard_setError,
      errMessage: 'There is an error!',
    }
    const inputState = { data: [], error: null, loading: false }
    const expectedOutputState = 'There is an error!'
    const actualOutputState = leaderboardReducer(inputState, action)

    expect(actualOutputState.error).toEqual(expectedOutputState)
  })

  it('sets loading to true on request data', () => {
    const action = {
      type: leaderboard_requestData,
    }
    const inputState = { data: [], error: null, loading: false }
    const actualOutputState = leaderboardReducer(inputState, action)

    expect(actualOutputState.loading).toBe(true)
  })
})
