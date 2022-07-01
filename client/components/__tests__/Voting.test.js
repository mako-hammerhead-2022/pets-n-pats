import React from 'react'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import { objTwoPet } from '~/__mockdata__/mockPetData'

import { postVotes } from '@/apiClient'
jest.mock('@/apiClient')

import Voting from '@/components/Voting'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return objTwoPet
  }),
  dispatch: jest.fn(),
}

describe('<Voting />', () => {
  it('renders on the screen', async () => {
    render(
      <Provider store={fakeStore}>
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )
    postVotes.mockReturnValue(Promise.resolve())
    const button = screen.getByRole('button', { name: 'Pick Me!' })
    await userEvent.click(button)
    expect(postVotes).toHaveBeenCalledWith(objTwoPet.cat.id)
  })
  it('after button click expect new pets to render', async () => {
    render(
      <Provider store={fakeStore}>
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )
    const button = screen.getByRole('button', { name: /skip/i })
    expect(button).toBeInTheDocument()

    await userEvent.click(button)

    expect(fakeStore.dispatch).toHaveBeenCalled()
  })
})
