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
  IconButton,
  Flex,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import PetForm from '@/components/PetForm'
import EditAnimalModal from '@/components/EditAnimalModal'

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
      <br />
      <Center>
        <Wrap justifyContent='space-between'>
          {pets?.map((pet) => {
            return <AnimalTile pet={pet} key={pet.id} />
          })}
        </Wrap>
      </Center>
    </div>
  )
}

function AnimalTile({ pet }) {
  const {
    onOpen: onEditModalOpen,
    isOpen: isEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()
  const {
    onOpen: onDetailsModalOpen,
    isOpen: isDetailsModalOpen,
    onClose: onDetailsModalClose,
  } = useDisclosure()
  return (
    <WrapItem w='200px' minH='300px' key={pet.id} bg='gray.100'>
      <Flex p={2} width='full' direction='column' bg='pink.200'>
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
          <Heading as='h4' fontSize='md' color='pink.900'>
            {pet.name} {pet.animal === 'cat' ? '🐱' : '🐶'}
          </Heading>
          <Box minH='4rem' mb='2'>
            <Text as='p' fontSize='sm' mb={2} noOfLines={3} color='pink.600'>
              {pet.bio}
            </Text>
          </Box>

          <Heading
            as='h5'
            fontSize='xs'
            color='pink.600'
            textTransform='uppercase'
          >
            Points:
          </Heading>
          <Text as='p' fontSize='lg' fontWeight='bold' color='pink.900'>
            {pet.points}
          </Text>
        </Box>
        <Flex justify='flex-end' gap='4'>
          <Tooltip hasArrow label='Click to view comments' shouldWrapChildren>
            <Button
              colorScheme='pink'
              variant='link'
              onClick={onDetailsModalOpen}
            >
              <Image boxSize='40px' src={message} />
            </Button>
          </Tooltip>
          <Tooltip hasArrow label='Edit your Pet' shouldWrapChildren>
            <IconButton
              label='Edit Pet'
              colorScheme='pink'
              icon={<EditIcon />}
              onClick={onEditModalOpen}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <AnimalModal
        pet={pet}
        isOpen={isDetailsModalOpen}
        onClose={onDetailsModalClose}
      />
      <EditAnimalModal
        pet={pet}
        isOpen={isEditModalOpen}
        onClose={onEditModalClose}
      />
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
        <ModalBody p='4'>
          {comments ? comments.content : 'No comment yet'}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MyPets
