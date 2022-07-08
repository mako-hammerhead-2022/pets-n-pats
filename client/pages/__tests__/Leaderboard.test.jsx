import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Leaderboard from '../Leaderboard'

import { petsWithScores } from '~/test/fake-data'

import { useDispatch, useSelector } from 'react-redux'
import { fetchSortedPets } from '@/actions'
import PointsTable from '@/components/PointsTable'

jest.mock('react-redux')
jest.mock('@/actions')
jest.mock('@/components/PointsTable')

beforeAll(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
})
afterAll(() => {
  console.error.mockRestore()
  jest.restoreAllMocks()
})

describe('<Leaderboard />', () => {
  it('renders a descriptive heading', () => {
    const fakeDispatch = jest.fn()
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Leaderboard />)
    const heading = screen.getByRole('heading', {
      level: 3,
      name: 'Pet Points Leaderboard',
    })
    expect(heading).toBeInTheDocument()
  })
  it('dispatches a fetch action', () => {
    const fakeDispatch = jest.fn()
    const fakeFetchAction = jest.fn()
    useDispatch.mockReturnValue(fakeDispatch)
    fetchSortedPets.mockReturnValue(fakeFetchAction)
    render(<Leaderboard />)
    expect(fakeDispatch).toHaveBeenCalledWith(fakeFetchAction)
  })
  // it('renders the child component with correct props', () => {
  //   const fakeDispatch = jest.fn()
  //   const fakeChild = jest.fn()
  //   useDispatch.mockReturnValue(fakeDispatch)
  //   PointsTable.mockReturnValue(fakeChild)
  //   useSelector.mockReturnValue(petsWithScores)
  //   render(<Leaderboard />)
  //   expect(PointsTable).toHaveBeenNthCalledWith(
  //     3,
  //     {
  //       petScores: petsWithScores,
  //     },
  //     {}
  //   )
  // })
})
