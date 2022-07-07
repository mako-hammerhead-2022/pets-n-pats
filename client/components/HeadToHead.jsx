import React, { useEffect } from 'react'
import { HStack, Heading, Container } from '@chakra-ui/react'

import AnimalTile from '@/components/AnimalTile'

function HeadToHead({ cat, dog }) {
  return (
    <Container maxWidth='container.xl' centerContent>
      <Heading as='h1' mb='4' fontSize='2xl'>
        Both want your attention! Who gets it?
      </Heading>
      <HStack justify='space-between' gap='10'>
        <AnimalTile animal={cat} />
        <Heading
          alignSelf='center'
          as='span'
          fontSize='3xl'
          fontFamily='cursive'
        >
          vs
        </Heading>
        <AnimalTile animal={dog} />
      </HStack>
    </Container>
  )
}

export default HeadToHead
