import React from 'react'
import { postVotes } from '../apiClient/votes.js'
import { Button } from '@chakra-ui/react'

const id = [4, 3]

function Voting() {
  function handleSubmit(winnerId) {
    if (winnerId !== 'skip') {
      postVotes(winnerId)
        .then(() => {
          console.log('dispatch(fetchTwoPets())')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <Button
        colorScheme='teal'
        value={id[0]}
        onClick={() => handleSubmit(id[0])}
      >
        {/* Cat Button */}
        Pick Me!
      </Button>
      <Button
        colorScheme='teal'
        value={null}
        onClick={() => handleSubmit('skip')}
      >
        {/* Skip */}
        Skip, both cute!
      </Button>
      <Button
        colorScheme='teal'
        value={id[1]}
        onClick={() => handleSubmit(id[1])}
      >
        {/* Dog Button */}
        No, Pick Me!
      </Button>
    </>
  )
}

export default Voting