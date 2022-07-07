import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Flex, ListItem, List, Image, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Flex justifyContent={'space-between'} gap='10' py='6' width='full'>
      <Navigation />
      <Authentication />
    </Flex>
  )
}

function Navigation() {
  const { isAuthenticated } = useAuth0()

  return (
    <nav>
      <List>
        <HStack gap='2'>
          <ListItem>
            <Button as='div' variant='ghost' colorScheme='teal'>
              <Link to='/'>Home</Link>
            </Button>
          </ListItem>
          {isAuthenticated && (
            <ListItem>
              <Button as='div' variant='ghost' colorScheme='teal'>
                <Link to='/my-pets'>My Pets</Link>
              </Button>
            </ListItem>
          )}
          <ListItem>
            <Button as='div' variant='ghost' colorScheme='teal'>
              <Link to='/leaderboard'>Leaderboard</Link>
            </Button>
          </ListItem>
        </HStack>
      </List>
    </nav>
  )
}

function Authentication() {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout({ returnTo: window.location.origin })
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  if (isAuthenticated) {
    return (
      <HStack gap='2'>
        <p
          aria-label='login message'
          className='login-welcome'
        >{`Welcome back, ${user.nickname}`}</p>
        <Image src={user.picture} boxSize='10' rounded='full' />
        <Button onClick={handleSignOut} colorScheme='teal'>
          Sign Out
        </Button>
      </HStack>
    )
  } else {
    return (
      <Button onClick={handleSignIn} colorScheme='teal'>
        Sign In
      </Button>
    )
  }
}
