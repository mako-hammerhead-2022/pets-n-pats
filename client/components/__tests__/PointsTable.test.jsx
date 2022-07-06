import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PointsTable from '@/components/PointsTable'

import { petsWithScores } from '~/test/fake-data'

describe('<PointsTable />', () => {
  it('renders a table', () => {
    render(<PointsTable petScores={petsWithScores} />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })
})
