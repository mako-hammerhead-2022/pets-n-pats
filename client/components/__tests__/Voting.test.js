import React from 'react'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import { objTwoPet } from '~/test/fake-data'

import { postVotes, postVotesTie } from '@/apiClient'
jest.mock('@/apiClient')

import Voting from '@/components/VotingButtons'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return objTwoPet
  }),
  dispatch: jest.fn(),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Voting />', () => {
  postVotes.mockReturnValue(Promise.resolve())
  postVotesTie.mockReturnValue(Promise.resolve())

  it('Postvotes is called when Pick me! button is clicked', async () => {
    render(
      <Provider store={fakeStore}>
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Pick Me!' }))

    expect(postVotes).toHaveBeenCalledWith(objTwoPet.cat.id)
  })
  it('Postvotes is called on No Pick me button', async () => {
    render(
      <Provider store={fakeStore}>
        {' '}
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )
    await userEvent.click(screen.getByRole('button', { name: 'No, Pick Me!' }))
    expect(postVotes).toHaveBeenCalledWith(objTwoPet.dog.id)
  })

  it('PostvotesTie is called when skip button is clicked', async () => {
    render(
      <Provider store={fakeStore}>
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )

    await userEvent.click(screen.getByRole('button', { name: /skip/i }))

    expect(postVotesTie).toHaveBeenCalledWith(
      objTwoPet.cat.id,
      objTwoPet.dog.id
    )
    expect(fakeStore.dispatch).toHaveBeenCalled()
  })
})
