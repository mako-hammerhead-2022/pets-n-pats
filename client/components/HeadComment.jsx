import React, { useState } from 'react'
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
} from '@chakra-ui/react'

import { postComment } from '../apiClient/comments'

{
  /* This module expects an "ani" object prop with:
        <Component ani={{id: #, name: ""}} />   */
}

function HeadComment({ ani }) {
  // local state
  const [comment, setComment] = useState('')
  const [loadCheck, setLoadCheck] = useState(false)
  const [buttonFill, setButtonFill] = useState('Add Comment')
  const [buttonIsBlocked, setButtonIsBlocked] = useState(false)

  // popover form handling
  function handleChange(e) {
    e.preventDefault()
    setComment(e.target.value)
  }

  function handleSave(e) {
    setLoadCheck(true)
    const commentObj = {
      petId: ani.id,
      authorId: 'auth0|something',
      content: comment,
    }
    e.preventDefault()
    postComment(commentObj)
      .then(() => {
        setComment('')
        setLoadCheck(false)
        setButtonFill('Added!')
        // disable comment buttons; spamming is immoral:
        setButtonIsBlocked(true)
      })
      .catch((err) => {
        console.log(err.message)
        setLoadCheck(false)
        setButtonFill('Failed!')
      })
  }

  // prevent render errors on initial load
  if (!ani) return null

  // screen render
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button isDisabled={buttonIsBlocked} isLoading={loadCheck}>
            {buttonFill}
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton zIndex='6' />
            <PopoverBody>
              <FormControl>
                <FormLabel>{`Comment on ${ani.name}`}</FormLabel>
                <Input
                  onChange={handleChange}
                  placeholder={`What do you think of ${ani.name}?`}
                  value={comment}
                />
              </FormControl>
            </PopoverBody>
            <PopoverFooter>
              <Button
                isDisabled={buttonIsBlocked}
                onClick={handleSave}
                colorScheme='blue'
                mr={3}
                isLoading={loadCheck}
              >
                Submit
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  )
}

export default HeadComment
