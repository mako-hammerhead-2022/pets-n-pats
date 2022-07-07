import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import HeadToHead from '@/components/HeadToHead'

import { objTwoPet } from '~/test/fake-data'

const { cat, dog } = objTwoPet

describe('<HeadToHead />', () => {
  it('receives props', () => {
    render(<HeadToHead cat={cat} dog={dog} />)
    const catName = screen.getByRole('heading', { name: /Cthulu/i })
    expect(catName).toBeInTheDocument()
    const DogName = screen.getByRole('heading', { name: /Balrog/i })
    expect(DogName).toBeInTheDocument()
  })
})
