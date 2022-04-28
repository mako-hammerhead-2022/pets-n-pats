import React, { useState } from 'react'
import api from '../apiClient'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Input,
  Textarea,
  Select,
  useDisclosure,
  FormControl,
  Container,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'

const PetForm = () => {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [animal, setAnimal] = useState('cat')
  const [selectedFile, setSelectedFile] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = async () => {
    const token = await getAccessTokenSilently()
    const imageUrl = await api.getImageUrl(selectedFile, token)
    const formData = {
      userId: user.sub,
      name,
      bio,
      animal,
      imageUrl,
    }
    await api.addPet(formData, token)

    onClose()
  }

  return (
    <>
      {isAuthenticated && (
        <Button onClick={onOpen} colorScheme="teal">
          + Add Pet
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Pet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{}}
              onSubmit={ async (values, actions) => {
                await actions.setSubmitting(false)
                handleSubmit()
              }}
            >
              {(props) => (
                <Form>
                  <FormControl>
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <Input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <FormLabel htmlFor="bio">Bio:</FormLabel>
                    <Textarea
                      type="text"
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      required
                    />
                    <FormLabel htmlFor="animal">
                      Select type of animal:
                    </FormLabel>
                    <Select
                      name="animal"
                      id="animal"
                      value={animal}
                      onChange={(e) => setAnimal(e.target.value)}
                      required
                    >
                      <option value="cat">Cat</option>
                      <option value="dog">Dog</option>
                    </Select>
                    <FormLabel htmlFor="image">Upload image:</FormLabel>
                    <Input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </FormControl>
                  <Container centerContent>
                    <div>
                      <Button
                        type="submit"
                        isLoading={props.isSubmitting}
                        colorScheme="teal"
                        m={2}
                      >
                        Add Pet
                      </Button>
                      <Button onClick={onClose} m={2}>
                        Cancel
                      </Button>
                    </div>
                  </Container>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PetForm
