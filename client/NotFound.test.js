import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NotFound from './pages/NotFound'

describe('<NotFound />', () => {
  it('shows 404', () => {
    render(<NotFound text='404' />)
    let heading = screen.getByRole('heading')
    expect(heading).toContainHTML('404')
  })
})
