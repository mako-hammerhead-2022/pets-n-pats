import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import {
  Flex,
  Heading,
  Image,
  Box,
  HStack,
  Tooltip,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import AddCommentPopover from '@/components/AddCommentPopover'

export default function AnimalTile({ animal }) {
  const images = JSON.parse(animal.imageUrl)

  return (
    <Flex width='400px' direction='column' alignItems={'center'}>
      <Carousel
        swipeable
        emulateTouch
        showStatus={false}
        infiniteLoop
        transitionTime='700'
        showThumbs={false}
      >
        {images?.map((imgURL, index) => {
          return (
            <Image
              key={index}
              boxSize='400px'
              objectFit='cover'
              shadow='lg'
              src={imgURL}
              alt={`An image of `}
              borderRadius='md'
              zIndex='2'
              borderWidth='0 1px 1px 1px'
              borderColor='teal.900'
              onMouseMove={(e) => {
                e.preventDefault()
              }}
            />
          )
        })}
      </Carousel>
      <Box
        width='95%'
        bg='teal.100'
        roundedBottom='md'
        p='4'
        borderWidth='0 1px 1px 1px'
        borderColor='teal.300'
        zIndex='1'
        boxShadow='inner'
      >
        <HStack justifyContent='space-between' mb='6'>
          <Heading as='h3' fontSize='2xl' color='teal.800'>
            {animal.name}
          </Heading>
          <AddCommentIcon animal={animal} />
        </HStack>
        <Box>
          <Text as='p' fontWeight='semibold' minH='100px' color='teal.600'>
            {animal.bio}
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

function AddCommentIcon({ animal }) {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    return <AddCommentPopover animal={animal} />
  } else {
    return (
      <Tooltip hasArrow label='Sign in to add a comment' shouldWrapChildren>
        <IconButton icon={<EditIcon />} isDisabled colorScheme='teal' />
      </Tooltip>
    )
  }
}
