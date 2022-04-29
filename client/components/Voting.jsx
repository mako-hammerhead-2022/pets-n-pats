import React from 'react'
import { postVotes } from '../apiClient/votes.js'
import { Button, HStack, Center } from '@chakra-ui/react'
import { fetchTwoPets } from '../actions/pets.js'
import { useDispatch } from 'react-redux'
// import petsData from '../../server/db/pets'

// const id = petsData.id

function Voting({ cat, dog }) {
  // #10 reciveing cat and dog data from home componenet. (and passing data to buttons)
  const dispatch = useDispatch()
  // #11 passing data to handleSubmit which triggers postVotes function
  function handleSubmit(winnerId) {
    if (winnerId !== 'skip') {
      postVotes(winnerId)
        // #12 this then triggers the postVotes function
        .then(() => {
          dispatch(fetchTwoPets())
        })
        .catch((err) => {
          console.log(err)
        })
    } else dispatch(fetchTwoPets())
  }

  return (
    <Center>
      <HStack spacing={48} mt={20}>
        <Button
          colorScheme="teal"
          value={cat.name}
          onClick={() => handleSubmit(cat.id)}
        >
          {/* Cat Button */}
          Pick Me!
        </Button>
        <Button
          colorScheme="teal"
          value="skip"
          onClick={() => handleSubmit('skip')}
        >
          {/* Skip */}
          Skip, both cute!
        </Button>
        <Button
          colorScheme="teal"
          value={dog.name}
          onClick={() => handleSubmit(dog.id)}
        >
          {/* Dog Button */}
          No, Pick Me!
        </Button>
      </HStack>
    </Center>
  )
}

export default Voting
