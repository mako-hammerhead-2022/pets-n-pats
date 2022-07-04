import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Portal,
  IconButton,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import { postComment } from '@/apiClient'

function AddCommentPopover({ animal }) {
  const { getAccessTokenSilently } = useAuth0()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [comment, setComment] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  async function handleSave(e) {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const token = await getAccessTokenSilently()
      await postComment({ petId: animal.id, content: comment }, token)
      setHasSubmitted(true)
      onClose()
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!animal) return null

  let buttonLabel
  if (isSubmitting) {
    buttonLabel = 'Adding...'
  } else if (hasSubmitted) {
    buttonLabel = 'Added!'
  } else {
    buttonLabel = 'Add Comment'
  }

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Tooltip label={buttonLabel} shouldWrapChildren>
          <IconButton
            aria-label={buttonLabel}
            icon={<EditIcon />}
            colorScheme='teal'
            onClick={onOpen}
            isDisabled={isSubmitting || hasSubmitted}
          />
        </Tooltip>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton zIndex='6' />
          <form onSubmit={handleSave}>
            <PopoverBody>
              <FormControl>
                <FormLabel>{`Comment on ${animal.name}`}</FormLabel>
                <Input
                  isDisabled={isSubmitting || hasSubmitted}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={`What do you think of ${animal.name}?`}
                  value={comment}
                />
              </FormControl>
            </PopoverBody>
            <PopoverFooter>
              <Button
                type='submit'
                colorScheme='teal'
                variant='outline'
                mr={3}
                isDisabled={hasSubmitted}
                isLoading={isSubmitting}
              >
                {buttonLabel}
              </Button>
            </PopoverFooter>
          </form>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default AddCommentPopover
