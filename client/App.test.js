import React from 'react'
import App from '@/App.jsx'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '@/components/Header.jsx'
import Home from '@/pages/Home.jsx'

import { objTwoPet } from '~/test/fake-data'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return {
      pets: {
        data: objTwoPet,
        loading: false,
        error: null,
      },
    }
  }),
  dispatch: jest.fn(),
}

jest.mock('@/components/Header.jsx')
jest.mock('@/pages/Home.jsx')

describe('<App />', () => {
  it('renders the Navigation and Home Page default Route', () => {
    Header.mockReturnValue(<div>Header Component</div>)
    Home.mockReturnValue(<div>Home Component</div>)
    render(
      <Provider store={fakeStore}>
        <Router initialEntries={['/']}>
          <App />
        </Router>
      </Provider>
    )

    expect(screen.getByText('Header Component')).toBeInTheDocument()
    expect(screen.getByText('Home Component')).toBeInTheDocument()
  })

  it('renders 404 Not Found when URL is garbage', () => {
    render(
      <Provider store={fakeStore}>
        <Router initialEntries={['/34132ntif32cvds']}>
          <App />
        </Router>
      </Provider>
    )

    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })
})
