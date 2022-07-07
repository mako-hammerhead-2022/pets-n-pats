import React from 'react'
import { Link } from 'react-router-dom'
import { Center, Button, Heading } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <div>
      <Center>
        <Heading
          as='h1'
          fontSize='6xl'
          color='teal'
          marginTop='2em'
          marginBottom='1em'
        >
          404 - Page Not Found
        </Heading>
      </Center>

      <img
        src='https://images.pexels.com/photos/4426874/pexels-photo-4426874.jpeg?auto=compress&cs=tinysrgb&w=800'
        alt=''
      />
      <Center>
        {' '}
        <Heading as='h1' fontSize='6xl' color='teal'>
          {' '}
          Something Went Wrong!
        </Heading>
      </Center>

      <Center>
        <Button
          as='div'
          variant='ghost'
          fontSize='xl'
          colorScheme='teal'
          color='grey'
          marginTop='1em'
          border='1px'
        >
          <Link to='/'>Back to home</Link>
        </Button>
      </Center>
    </div>
  )
}

export default NotFound
