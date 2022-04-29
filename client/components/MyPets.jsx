import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserPets } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Image,
  AspectRatio,
  Box,
  Wrap,
  WrapItem,
  Container,
  Heading,
  Text,
  Center,
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
    console.log(pet.imageUrl)
    return (
      <WrapItem w='200px' h='300px' key={pet.id} bg='gray.100'>
        <Box>
          <AspectRatio maxW='200px' ratio={4 / 3}>
            <Image
              objectFit='cover'
              src={pet.imageUrl}
              alt={`picture of the pet we put here in the tag of ${pet.name}`}
            />
          </AspectRatio>
          <Box textAlign='left'>
            <Heading as='h4' fontSize='md'>
              {pet.name}
            </Heading>
            <Text as='p' fontSize='xs' mb={4}>
              {pet.bio}
            </Text>
            <Heading as='h5' fontSize='xs'>
              Points:
            </Heading>
            <Text as='p'>{pet.points}</Text>
          </Box>
        </Box>
      </WrapItem>
    )
  })

  return (
    <div className='MyPets'>
      <PetForm onSuccess={getUserPets} />
      <Container maxW='4xl' mt={6}>
        <Center>
          <Wrap justifyContent='space-between'>{renderedPets}</Wrap>
        </Center>
      </Container>
    </div>
  )
}

export default MyPets
