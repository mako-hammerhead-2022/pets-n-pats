import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  // console.log(user)
  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      {isAuthenticated && <p>{`Welcome back, ${user.nickname}`}</p>}
      {isAuthenticated ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <img src={user.picture} />
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </>
  )
}

export default Login
