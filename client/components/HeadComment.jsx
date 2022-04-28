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
  Input
} from '@chakra-ui/react'

import { postComment } from '../apiClient/comments'

export function HeadComment({ ani }) {

  if(!ani) return null

  const [comment, setComment] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setComment(e.target.value)
  }

  function handleSave(e) {
    const commentObj = {
      petId: e.target.petId,
      content: comment
    }
    e.preventDefault()
    postComment(commentObj)
  }

  return (
    <>
    <Popover>
      <PopoverTrigger>
        <Button>Add Comment</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton zIndex="6"/>
        <PopoverBody>
          <FormControl>
              <FormLabel>{`Comment on ${ani.name}`}</FormLabel>
              <Input type="hidden" name='petId' value={ani.id} />
              <Input onChange={handleChange} placeholder={`What do you think of ${ani.name}?`} value={comment} />
            </FormControl>
            </PopoverBody>
            <PopoverFooter>
          <Button onClick={handleSave} colorScheme='blue' mr={3}>
              Submit
          </Button>
          </PopoverFooter>
      </PopoverContent>
    </Popover>
    </>
  )
}

export default HeadComment