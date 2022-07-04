import React from 'react'

import {
  HStack,
  VStack,
  Heading,
  Image,
  Container,
  Box,
  Text,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import HeadComment from '@/components/HeadComment'

function HeadToHead({ cat, dog }) {
  return (
    <>
      <Container maxWidth='1200px' centerContent>
        <Heading as='h1' mb='25px'>
          Both want your attention! Who gets it?
        </Heading>
        <HStack justify='space-around' alignItems='flex-start' spacing={4}>
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
    </>
  )
}

function AnimalTile({ animal }) {
  const images = JSON.parse(animal.imageUrl)
  const randomIndex = Math.floor(Math.random() * images.length)
  const image = images[randomIndex]
  return (
    <VStack gap='4' width='500px'>
      <Image
        boxSize='400px'
        objectFit='cover'
        boxShadow='lg'
        src={image}
        alt={`An image of ${animal.name}`}
        borderStyle='inset'
        borderWidth='6px'
        borderColor='#55555570'
        borderRadius='15px'
      />
      <Box minH='14'>
        <Heading as='h4' fontSize='2xl' mb='5px'>
          {animal.name}
        </Heading>
        <Box
          fontWeight='semibold'
          p='5px'
          width='400px'
          minH='100px'
          background={mode('#8aeaea', '#12c0c0')}
          boxShadow='2px 5px #55555570'
          borderStyle='solid'
          borderRadius='3px'
          borderWidth='3px'
          borderColor='#dfddcf'
        >
          <Text as='p'>{animal.bio}</Text>
        </Box>
      </Box>
      <HeadComment animal={animal} />
    </VStack>
  )
}

export default HeadToHead
