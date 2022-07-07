import React from 'react'
import { screen, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'

import PointsTable from '@/components/PointsTable'

import { petsWithScores } from '~/test/fake-data'

describe('<PointsTable />', () => {
  it('renders a table with a header row', () => {
    render(<PointsTable petScores={petsWithScores} />)
    const table = screen.getByRole('table')
    const titleRow = within(table).getAllByRole('columnheader')
    expect(table).toBeInTheDocument()
    expect(titleRow[0].textContent).toBe('Name')
    expect(titleRow[1].textContent).toBe('Points')
    expect(titleRow[2].textContent).toBe('Species')
  })
  it('renders the data of one animal to the table', () => {
    render(<PointsTable petScores={petsWithScores} />)
    const table = screen.getByRole('table')
    const firstRow = within(table).getAllByRole('row')[1]
    const cells = within(firstRow).getAllByRole('cell')
    expect(cells[0].textContent).toBe('Betty')
    expect(cells[1].textContent).toBe('1001')
    expect(cells[2].textContent).toBe('🐶')
  })
  it('renders ten + 1 header rows to the table', () => {
    render(<PointsTable petScores={petsWithScores} />)
    const table = screen.getByRole('table')
    const rows = within(table).getAllByRole('row')
    expect(rows).toHaveLength(11)
  })
})
