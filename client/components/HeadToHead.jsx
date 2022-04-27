import React from 'react'

import { Flex, Heading, Image } from '@chakra-ui/react'

export function HeadToHead({ cat, dog }) {
  // const { cat, dog } = {
  //   cat: {
  //     name: 'Giralda',
  //     bio: 'Customizable holistic conglomeration',
  //     imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
  //   },
  //   dog: {
  //     name: 'Orel',
  //     bio: 'Ameliorated dedicated extranet',
  //     imageUrl: 'https://wallpaperaccess.com/full/2378663.jpg',
  //   },
  // }

  return (
    <>
      <Heading>Both want your attention! Who gets it?</Heading>
      <Flex align="center" justify="center" className="flex-container">
        <div className="cat-box">
          <Image
            width="500px"
            height="500px"
            borderStyle="solid"
            borderWidth="5px"
            borderColor="red"
            objectFit="cover"
            src={cat.imageUrl}
            alt={`An image of ${cat.name}`}
          />
          <div className="pet-name">{cat.name}</div>
          <div className="pet-bio">{cat.bio}</div>
        </div>
        <Heading>vs</Heading>
        <div className="dog-box">
          <Image
            width="500px"
            height="500px"
            borderStyle="solid"
            borderWidth="5px"
            borderColor="red"
            objectFit="cover"
            src={dog.imageUrl}
            alt={`An image of ${dog.name}`}
          />
          <div className="pet-name">{dog.name}</div>
          <div className="pet-bio">{dog.bio}</div>
        </div>
      </Flex>
    </>
  )
}

export default HeadToHead
