import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '@/pages/Home'
import HeadToHead from '@/components/HeadToHead'
import AnimalTile from '@/components/AnimalTile'

jest.mock('react-redux')

describe('<AnimalTile />', () => {
  it('changes when clicked(swiped)', () => {
    render(<AnimalTile />)
    const images = screen.getAllByRole('img')
    console.log(images)
  })
})
