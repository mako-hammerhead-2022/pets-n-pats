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

describe('<Voting />', () => {
  postVotes.mockReturnValue(Promise.resolve())
  postVotesTie.mockReturnValue(Promise.resolve())

  it('renders on the screen', async () => {
    render(
      <Provider store={fakeStore}>
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Pick Me!' }))

    expect(postVotes).toHaveBeenCalledWith(objTwoPet.cat.id)
  })

  it('after button click expect new pets to render', async () => {
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
