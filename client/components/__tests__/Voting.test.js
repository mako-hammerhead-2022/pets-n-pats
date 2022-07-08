import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'

import { fetchTwoPets } from '@/actions'
import { postVotes, postVotesTie } from '@/apiClient'
import Voting from '@/components/VotingButtons'

import { objTwoPet } from '~/test/fake-data'

jest.mock('@/apiClient')
jest.mock('@/actions')

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return objTwoPet
  }),
  dispatch: jest.fn(),
}

beforeAll(() => {
  jest.spyOn(console, 'log')
  console.log.mockImplementation(() => {})
})

afterAll(() => {
  console.log.mockRestore()
  jest.restoreAllMocks()
})

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
    waitFor(() => {
      expect(fakeStore.dispatch).toHaveBeenCalledTimes(1)
    })
  })
  it('Postvotes is called on No Pick me button', async () => {
    render(
      <Provider store={fakeStore}>
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )
    await userEvent.click(screen.getByRole('button', { name: 'No, Pick Me!' }))
    expect(postVotes).toHaveBeenCalledWith(objTwoPet.dog.id)
    waitFor(() => {
      expect(fakeStore.dispatch).toHaveBeenCalledWith(fetchTwoPets())
    })
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
    waitFor(() => {
      expect(fakeStore.dispatch).toHaveBeenCalledWith(fetchTwoPets())
    })
  })
  const error = new Error('Error brain overload')
  const error2 = new Error('Error brain overload again')
  postVotes.mockImplementation(() => Promise.reject(error))
  postVotesTie.mockImplementation(() => Promise.reject(error2))

  it('returns err when when postVotes promise rejected', async () => {
    render(
      <Provider store={fakeStore}>
        <Voting cat={objTwoPet.cat} dog={objTwoPet.dog} />
      </Provider>
    )

    await userEvent.click(screen.getByRole('button', { name: 'Pick Me!' }))
    expect(postVotes).toHaveBeenCalledWith(objTwoPet.cat.id)
    expect(console.log).toHaveBeenCalledWith(error)
    expect(fakeStore.dispatch).not.toHaveBeenCalled()
  })

  it('returns err when postVotesTie promise is rejected', async () => {
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
    expect(console.log).toHaveBeenCalledWith(error2)
    expect(fakeStore.dispatch).not.toHaveBeenCalled()
  })
})
