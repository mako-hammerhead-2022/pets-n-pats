import React from 'react'
import App from '@/App.jsx'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Login from '@/components/Login.jsx'
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

jest.mock('@/components/Login.jsx')
jest.mock('@/pages/Home.jsx')

describe('<App />', () => {
  it('renders the Login component', () => {
    Login.mockReturnValue(<div>Login Component</div>)
    Home.mockReturnValue(<div>Home Component</div>)
    render(
      <Provider store={fakeStore}>
        <Router initialEntries={['/']}>
          <App />
        </Router>
      </Provider>
    )
    const loginComponent = screen.getByText('Login Component')
    expect(loginComponent).toBeInTheDocument()
    expect(screen.getByText('Home Component')).toBeInTheDocument()
  })
})
