import React from 'react'
import { screen, render, within, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import PointsTable from '@/components/PointsTable'

import { makeTestAnimals } from '~/test/fakeDataHelper'

import { useSelector } from 'react-redux'

jest.mock('react-redux')

const petsWithScores = makeTestAnimals(50)

describe('<PointsTable />', () => {
  it('renders a table with a header row', () => {
    useSelector.mockReturnValue(petsWithScores)
    render(<PointsTable />)
    const table = screen.getByRole('table')
    const titleRow = within(table).getAllByRole('columnheader')
    expect(table).toBeInTheDocument()
    expect(titleRow[0].textContent).toBe('Name')
    expect(titleRow[1].textContent).toBe('Points')
    expect(titleRow[2].textContent).toBe('Species')
  })
  it('renders the data of one animal to the table', () => {
    render(<PointsTable />)
    useSelector.mockReturnValue(petsWithScores)
    const table = screen.getByRole('table')
    const firstRow = within(table).getAllByRole('row')[1]
    const cells = within(firstRow).getAllByRole('cell')
    expect(cells[0].textContent).toBe('Pet 50')
    expect(cells[1].textContent).toBe('500')
    expect(cells[2].textContent).toBe('🐶')
  })
  it('renders ten + 1 header rows to the table', () => {
    useSelector.mockReturnValue(petsWithScores)
    render(<PointsTable />)
    const table = screen.getByRole('table')
    const rows = within(table).getAllByRole('row')
    expect(rows).toHaveLength(11)
  })
  it('button click changes page', () => {
    useSelector.mockReturnValue(petsWithScores)
    const { container } = render(<PointsTable />)
    const pageText = container.getElementsByClassName('page-number')[0]
    let pageNumber = pageText.textContent.split(' ')[1]
    expect(pageNumber).toBe('1')
    fireEvent(
      screen.getByRole('button', { name: '>' }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    pageNumber = pageText.textContent.split(' ')[1]
    expect(pageNumber).toBe('2')
  })
})
