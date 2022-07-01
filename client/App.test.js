import React from 'react'
import Login from '@/components/Login.jsx'
import App from '@/App.jsx'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { objTwoPet } from '~/__mockdata__/mockPetData'

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

describe('<App />', () => {
  it('renders the Login component', () => {
    Login.mockReturnValue(<div>Login Component</div>)
    render(
      <Provider store={fakeStore}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    const loginComponent = screen.getByText('Login Component')
    expect(loginComponent).toBeInTheDocument()
  })
})
