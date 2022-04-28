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
  useToast,
  Portal
} from '@chakra-ui/react'

import { postComment } from '../apiClient/comments'

  {/* This component is now a reusable module (not just for Head)
      and expects an object prop that looks like this:

       <Component ani={{id: #, name: ""}} />   */}


export function HeadComment({ ani }) {

 // toast response handling
// const toast = useToast()
// const breadSlice = {
//       title: 'Comment added',
//       description: `Your comment on ${ani.name} has been added.`,
//       status: 'success',
//       duration: 9000,
//       isClosable: true,
//     }

    // local state
  const [comment, setComment] = useState('')
  const [loadCheck, setLoadCheck] = useState(false)
  const [buttonFill, setButtonFill] = useState('Submit')

  // popoverform handling

  function handleChange(e) {
    e.preventDefault()
    setComment(e.target.value)
  }

  function handleSave(e) {
    setLoadCheck(true)
    const commentObj = {
      petId: ani.id,
      authorId: "auth0|something",
      content: comment
    }
    e.preventDefault()
    postComment(commentObj)
    .then(()=>{
      setLoadCheck(false)
      setButtonFill('Added!')
      // button reponse value changes are
    })
    // .then(()=>toast(breadSlice))
    .catch((err)=>{console.log(err.message)})
  }

  // prevent render errors on initial load
  if(!ani) return null

  // screen render
  return (
    <>
    <Popover  closeDelay={1500}>
      <PopoverTrigger>
        <Button>Add Comment</Button>
      </PopoverTrigger>
      <Portal>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton zIndex="6"/>
        <PopoverBody>
          <FormControl>
              <FormLabel>{`Comment on ${ani.name}`}</FormLabel>
              <Input onChange={handleChange} placeholder={`What do you think of ${ani.name}?`} value={comment} />
            </FormControl>
            </PopoverBody>
            <PopoverFooter>
          <Button onClick={handleSave} colorScheme='blue' mr={3} isLoading={loadCheck}>
              {buttonFill}
          </Button>
          </PopoverFooter>
      </PopoverContent>
      </Portal>
    </Popover>
    </>
  )
}

export default HeadComment