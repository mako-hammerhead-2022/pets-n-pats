import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Voting from '../Voting'

describe('<Voting />', () => {
  it('renders on the screen', () => {
    render(<Voting />)
    const button = screen.getByRole('button', { name: 'Pick Me!' })
    expect(button.textContent).toBe('Pick Me!')
  })
})
