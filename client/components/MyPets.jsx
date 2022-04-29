import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserPets } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Image,
  AspectRatio,
  Box,
  Flex,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react'
import PetForm from './PetForm'

function MyPets() {
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()

  const pets = useSelector((state) => state.myPets)

  useEffect(() => {
    getUserPets()
  }, [])

  async function getUserPets() {
    const token = await getAccessTokenSilently()
    dispatch(fetchUserPets(token))
  }

  const renderedPets = pets?.map((pet) => {
    return (
      <Box w='200px' h='300px' key={pet.id} bg='gray.100'>
        <AspectRatio maxW='200px' ratio={4 / 3}>
          <Image
            objectFit='cover'
            src={pet.imageUrl}
            alt={`picture of the pet we put here in the tag of ${pet.name}`}
          />
        </AspectRatio>
        <Heading as='h4' fontSize='md'>
          {pet.name}
        </Heading>
        <Text as='p'>{pet.bio}</Text>
      </Box>
    )
  })

  return (
    <div className='MyPets'>
      <PetForm onSuccess={getUserPets} />
      <Container maxW='xl'>
        <Flex justifyContent='space-between'>{renderedPets}</Flex>
      </Container>
    </div>
  )
}

export default MyPets
