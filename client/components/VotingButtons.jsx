import React from 'react'
import { postVotes } from '@/apiClient'
import { Button, HStack, Center } from '@chakra-ui/react'
import { fetchTwoPets } from '@/actions'
import { useDispatch } from 'react-redux'

function Voting({ cat, dog }) {
  const dispatch = useDispatch()

  // win 2 points
  // draw 1 point
  function handleSubmit(winnerId) {
    if (winnerId !== 'skip') {
      postVotes(winnerId)
        .then(() => {
          dispatch(fetchTwoPets())
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      dispatch(fetchTwoPets())
    }
  }

  return (
    <Center width='full'>
      <HStack spacing={40} mt={8} mb={48}>
        <Button
          colorScheme='teal'
          value={cat.name}
          onClick={() => handleSubmit(cat.id)}
        >
          Pick Me!
        </Button>
        <Button
          colorScheme='teal'
          variant='ghost'
          value='skip'
          onClick={() => handleSubmit('skip')}
        >
          Skip, both cute!
        </Button>
        <Button
          colorScheme='teal'
          value={dog.name}
          onClick={() => handleSubmit(dog.id)}
        >
          No, Pick Me!
        </Button>
      </HStack>
    </Center>
  )
}

export default Voting
