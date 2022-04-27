import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import MyPets from '../MyPets'

describe('<MyPets />', () => {
  const userId = '6'
  it('renders with the given prop', () => {
    console.log('1111111111111111111111111111111')
    render(<MyPets userId />)
    // screen.debug()
    // const dogName = screen.getByText('Orel')
    const petName = screen.getByRole('li')
    // console.log(petName.textContent)
    expect(petName.textContent).toContain('Orel')
    expect(petName).toBeInTheDocument()
  })

  // it('alt text renders accessible image', () => {
  //   render(<MyPets name='Orel' breed='spaniel' superpower='mind control' src='images/bulldog.png' />)
  //   const petName = screen.getByAltText(/Orel/i)
  //   expect(petName.src).toContain('/images/bulldog.png')
  //   expect(petName).toHaveProperty('src', 'http://localhost/images/bulldog.png')
  // })
})
