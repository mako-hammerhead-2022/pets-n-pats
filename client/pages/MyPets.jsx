import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserPets } from '@/actions'
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import PetForm from '@/components/PetForm'

function MyPets() {
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()

  const pets = useSelector((state) => state.myPets.data)

  useEffect(() => {
    getUserPets()
  }, [])

  async function getUserPets() {
    const token = await getAccessTokenSilently()
    dispatch(fetchUserPets(token))
  }

  return (
    <div className='MyPets'>
      <PetForm onSuccess={getUserPets} />
      <Container maxW='4xl' mt={6} mb={20}>
        <Center>
          <Wrap justifyContent='space-between'>
            {pets?.map((pet) => {
              return <AnimalTile pet={pet} key={pet.id} />
            })}
          </Wrap>
        </Center>
      </Container>
    </div>
  )
}

function AnimalTile({ pet }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <WrapItem w='200px' minH='300px' key={pet.id} bg='gray.100'>
      <Box p={2} width='full' onClick={onOpen}>
        <AspectRatio maxW='200px' ratio={4 / 3} mb={2}>
          <Image
            objectFit='cover'
            src={
              JSON.parse(pet.imageUrl)[
                Math.floor(Math.random() * JSON.parse(pet.imageUrl).length)
              ]
            } // get a random image
            alt={`picture of the pet we put here in the tag of ${pet.name}`}
          />
        </AspectRatio>
        <Box textAlign='left'>
          <Heading as='h4' fontSize='md'>
            {pet.name}
          </Heading>
          <Text as='p' fontSize='xs' mb={2}>
            {pet.bio}
          </Text>
          <Heading as='h5' fontSize='xs'>
            Points:
          </Heading>
          <Text as='p'>{pet.points}</Text>
        </Box>
      </Box>
      <AnimalModal pet={pet} isOpen={isOpen} onClose={onClose} />
    </WrapItem>
  )
}

function AnimalModal({ pet, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{pet.name}</ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default MyPets
