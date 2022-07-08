import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserPets } from '@/actions'
import * as api from '@/apiClient'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

export default function EditAnimalModal({ pet, isOpen, onClose }) {
  const { getAccessTokenSilently } = useAuth0()

  const [editedPetData, setEditedPetData] = useState({
    ...pet,
    name: pet.name,
    bio: pet.bio,
  })

  const dispatch = useDispatch()

  function handleChange(e) {
    const { name, value } = e.target
    setEditedPetData({
      ...editedPetData,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    await e.preventDefault()
    const token = await getAccessTokenSilently()
    await api.updatePet(editedPetData, token)
    dispatch(fetchUserPets(token))
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl>
              <FormLabel>Edit Name:</FormLabel>
              <Input
                placeholder='pet name'
                name='name'
                value={editedPetData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Bio:</FormLabel>
              <Input
                placeholder='pet bio'
                name='bio'
                value={editedPetData.bio}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} type='submit'>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}
