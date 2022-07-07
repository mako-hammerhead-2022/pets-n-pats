import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import NotFound from '@/pages/NotFound'

describe('<NotFound />', () => {
  it('shows 404', () => {
    render(<NotFound />, { wrapper: Router })
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument()
  })
})
