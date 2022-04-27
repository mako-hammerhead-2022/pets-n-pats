import React from 'react'

import { Flex, Heading, Image } from '@chakra-ui/react'

export function HeadToHead({ cat, dog }) {

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
          <h2 className="pet-name">{cat.name}</h2>
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
          <h2 className="pet-name">{dog.name}</h2>
          <div className="pet-bio">{dog.bio}</div>
        </div>
      </Flex>
    </>
  )
}

export default HeadToHead
