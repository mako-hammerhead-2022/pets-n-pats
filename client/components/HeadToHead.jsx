import React from 'react'

import {
  HStack,
  VStack,
  Heading,
  Image,
  Container,
  Box,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import HeadComment from './HeadComment'

function HeadToHead({ cat, dog }) {
  const scaler = '400px'

  // get a random cat image
  const catImages = JSON.parse(cat.imageUrl);
  const catIndex = Math.floor(Math.random() * catImages.length);
  const catImage = catImages[catIndex];

  // get a random dog image
  const dogImages = JSON.parse(dog.imageUrl);
  const dogIndex = Math.floor(Math.random() * catImages.length);
  const dogImage = dogImages[dogIndex];
  console.log(catImage, dogImage)

  const styleProps = {
    image: {
      width: scaler,
      height: scaler,
      borderStyle: 'inset',
      borderWidth: '6px',
      borderColor: '#55555570',
      borderRadius: '15px',
      objectFit: 'cover',
    },
    bioBox: {
      p: '5px',
      maxWidth: scaler,
      background: mode('#8aeaea', '#12c0c0'),
      boxShadow: '2px 5px #55555570',
      borderStyle: 'solid',
      borderRadius: '3px',
      borderWidth: '3px',
      borderColor: '#dfddcf',
    },
    nameText: {
      color: '#ddd',
    },
    bioText: {
      color: '#ddd',
    },
  }

  return (
    <>
      <Heading as='h1' mb='25px'>
        Both want your attention! Who gets it?
      </Heading>
      <Container maxWidth='1200px'>
        <HStack justify='space-around' alignItems='flex-start' spacing={4}>
          <VStack id='cat-box'>
            <Image
              {...styleProps.image}
              src={catImage} 
              alt={`An image of ${cat.name}`}
            />
            <Box {...styleProps.bioBox}>
              <Heading as='h4' fontSize='2xl' mb='5px'>
                {cat.name}
              </Heading>
              <Box className='pet-bio' fontWeight={'semibold'}>
                {cat.bio}
              </Box>
            </Box>
            <HeadComment ani={cat} />
          </VStack>
          <Heading alignSelf='center'>vs</Heading>
          <VStack id='dog-box'>
            <Image
              {...styleProps.image}
              src={dogImage}
              alt={`An image of ${dog.name}`}
            />
            <Box {...styleProps.bioBox}>
              <Heading as='h4' fontSize='2xl' mb='5px'>
                {dog.name}
              </Heading>
              <Box className='pet-bio' fontWeight={'semibold'}>
                {dog.bio}
              </Box>
            </Box>
            <HeadComment ani={dog} />
          </VStack>
        </HStack>
      </Container>
    </>
  )
}

export default HeadToHead
