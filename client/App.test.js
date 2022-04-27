import React from 'react'
import Login from './components/Login.jsx'
import App from './App.jsx'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

jest.mock('./components/Login.jsx')

describe('<App />', () => {
  it('renders the Login component', () => {
    Login.mockReturnValue(<div>Login Component</div>)
    render(
      <Router>
        <App />
      </Router>
    )
    const loginComponent = screen.getByText('Login Component')
    expect(loginComponent).toBeInTheDocument()
  })
})
