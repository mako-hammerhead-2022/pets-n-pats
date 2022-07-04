import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@chakra-ui/react'

import { fetchTwoPets } from '@/actions'

import Voting from '@/components/VotingButtons'
import HeadToHead from '@/components/HeadToHead'

function App() {
  const dispatch = useDispatch()

  const { data: pets, loading } = useSelector((state) => state.pets)

  useEffect(() => {
    dispatch(fetchTwoPets())
  }, [])

  return (
    <Container>
      {!loading && (
        <>
          <HeadToHead cat={pets.cat} dog={pets.dog} />
          <Voting cat={pets.cat} dog={pets.dog} />
        </>
      )}
    </Container>
  )
}

export default App
