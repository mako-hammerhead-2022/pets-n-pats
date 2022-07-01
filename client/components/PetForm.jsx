import React, { useState } from 'react'
import * as api from '@/apiClient'
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

const PetForm = ({ onSubmit, onSuccess }) => {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [animal, setAnimal] = useState('cat')
  const [selectedFiles, setSelectedFiles] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  }

  const handleSubmit = async () => {
    const token = await getAccessTokenSilently()

    const urls = [];
    for (let file of selectedFiles) {
      const imageUrl = await api.getImageUrl(file, token)
      urls.push(imageUrl);
    }

    const formData = {
      userId: user.sub,
      name,
      bio,
      animal,
      imageUrl: JSON.stringify(urls),
    }
    await api.addPet(formData, token)

    setName('')
    setBio('')
    setAnimal('cat')
    setSelectedFiles(null)

    onClose()
    onSuccess()
  }

  return (
    <>
      {isAuthenticated && (
        <Button onClick={onOpen} colorScheme='teal'>
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
              onSubmit={(values) => {
                onSubmit(values)
                handleSubmit()
              }}
            >
              {(props) => (
                <Form>
                  <FormControl>
                    <FormLabel htmlFor='name'>Name:</FormLabel>
                    <Input
                      type='text'
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <FormLabel htmlFor='bio'>Bio:</FormLabel>
                    <Textarea
                      type='text'
                      id='bio'
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      required
                    />
                    <FormLabel htmlFor='animal'>
                      Select type of animal:
                    </FormLabel>
                    <Select
                      name='animal'
                      id='animal'
                      value={animal}
                      onChange={(e) => setAnimal(e.target.value)}
                      required
                    >
                      <option value='cat'>Cat</option>
                      <option value='dog'>Dog</option>
                    </Select>
                    <FormLabel htmlFor='image'>Upload image:</FormLabel>
                    <Input
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      multiple
                      onChange={handleFileChange}
                      required
                    />
                  </FormControl>
                  <Container centerContent>
                    <div>
                      <Button
                        type='submit'
                        isLoading={props.isSubmitting}
                        colorScheme='teal'
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

PetForm.defaultProps = {
  onSubmit: () => {},
}
export default PetForm
