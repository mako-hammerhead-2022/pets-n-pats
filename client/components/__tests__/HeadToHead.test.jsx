import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HeadToHead } from '../HeadToHead'

const { cat, dog } = {
  cat: {
    name: 'Cthulu',
    bio: 'Customizable holistic conglomeration',
    imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
  },
  dog: {
    name: 'The Balrog',
    bio: 'Ameliorated dedicated extranet',
    imageUrl: 'https://wallpaperaccess.com/full/2378663.jpg',
  },
}

describe('<HeadToHead />', () => {
  it('receives props', () => {
    render(<HeadToHead cat={cat} dog={dog} />)
    const catName = screen.getByAltText(/Cthulu/i)
    expect(catName.src).toContain('MTg0NjE0OQ')
    const DogName = screen.getByRole('heading', { name: /Balrog/i })
    expect(DogName).toBeInTheDocument()
  })
})
