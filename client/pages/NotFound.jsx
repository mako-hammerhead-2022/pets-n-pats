import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Heading } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <div>
      <Heading as='h1' fontSize='6xl'>
        Opps! Something went wrong!!!!!!!
      </Heading>

      <img
        src='https://images.pexels.com/photos/4426874/pexels-photo-4426874.jpeg?auto=compress&cs=tinysrgb&w=800'
        alt=''
      />
      <Button as='div' variant='ghost' colorScheme='teal'>
        <Link to='/'>Home</Link>
      </Button>
    </div>
  )
}

export default NotFound
