import React, { useEffect, useState } from 'react'
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
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import PetForm from '@/components/PetForm'

import { getCommentsByPetId } from '@/apiClient'
import message from '../icons/message.png'

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
    <WrapItem w='200px' minH='300px' key={pet.id} bg='#e8e1f4'>
      <Box p={2} width='full' onClick={onOpen}>
        <AspectRatio maxW='200px' ratio={4 / 3} mb={2}>
          <Image
            borderColor='#f6ee86'
            borderStyle='solid'
            borderWidth='4px'
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
            {pet.name} is a {pet.animal}
          </Heading>
          <Text as='p' fontSize='xs' mb={2}>
            {pet.bio}
          </Text>
          <Heading as='h5' fontSize='xs'>
            Points:
          </Heading>
          <Text as='p'>{pet.points}</Text>
        </Box>
        <Box textAlign='right'>
          <Tooltip hasArrow label='Click to view comments' shouldWrapChildren>
            <Button bgColor='#e8e1f4' variant='link'>
              <AnimalModal pet={pet} isOpen={isOpen} onClose={onClose} />
              <Image boxSize='40px' src={message} />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </WrapItem>
  )
}
function AnimalModal({ pet, isOpen, onClose }) {
  const { getAccessTokenSilently } = useAuth0()

  const [comments, setComments] = useState(null)

  async function getUserPetsComments() {
    const token = await getAccessTokenSilently()
    const commentsData = await getCommentsByPetId(pet.id, token)
    setComments(commentsData)
  }

  useEffect(() => {
    getUserPetsComments()
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='90%'
        backdropBlur='10px'
      />
      <ModalContent bgColor='#e3f5fe'>
        <ModalHeader>Read comments about {pet.name}</ModalHeader>
        <ModalCloseButton bgColor='#fdc2a2' />
        <ModalBody>{comments ? comments.content : 'No comment yet'}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MyPets
