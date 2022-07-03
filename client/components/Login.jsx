import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout({ returnTo: window.location.origin })
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <Flex justifyContent={'flex-end'} gap='10'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to='/mypets'>My Pets</Link>
            </li>
          )}
        </ul>
      </nav>
      {isAuthenticated && (
        <p
          aria-label='login message'
          className='login-welcome'
        >{`Welcome back, ${user.nickname}`}</p>
      )}
      {isAuthenticated ? (
        <div>
          <Button onClick={handleSignOut} colorScheme='teal' m={2}>
            Sign Out
          </Button>
          <img src={user.picture} className='avatar' />
        </div>
      ) : (
        <Button onClick={handleSignIn} colorScheme='teal' m={2}>
          Sign In
        </Button>
      )}
    </Flex>
  )
}

export default Login
