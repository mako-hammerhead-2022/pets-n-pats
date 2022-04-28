import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './Login.css'

const Login = () => {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <div className='login'>
      {isAuthenticated && (
        <p
          aria-label='login message'
          className='login-welcome'
        >{`Welcome back, ${user.nickname}`}</p>
      )}
      {isAuthenticated ? (
        <>
          <button onClick={handleSignOut} className='btn'>
            Sign Out
          </button>
          <img src={user.picture} className='avatar' />
        </>
      ) : (
        <button onClick={handleSignIn} className='btn'>
          Sign In
        </button>
      )}
    </div>
  )
}

export default Login
