import { leaderboard_receiveData } from '@/actions'
import leaderboardReducer from '@/reducers/leaderboard'
import { petsWithScores } from '~/test/fake-data'

describe('top 10 pets reducer', () => {
  test('receives 10 top scoring pets', () => {
    const action = {
      type: leaderboard_receiveData,
      leaderboard: petsWithScores,
    }
    const inputState = { data: [], error: null, loading: false }
    const expectedOutputState = petsWithScores
    const actualOutputState = leaderboardReducer(inputState, action)

    expect(actualOutputState.data).toEqual(expectedOutputState)
    expect(actualOutputState).not.toBe(inputState)
  })
})
