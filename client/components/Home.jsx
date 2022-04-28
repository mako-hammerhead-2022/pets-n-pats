import React from 'react'
import Voting from './Voting'

import { HeadToHead } from './HeadToHead.jsx'

// TODO importing hard-coded data, - remove for deployment
import { objTwoPet } from '../../__mockdata__/mockPetData'

function App() {
  // TODO hard-coded for HeadToHead - replace with UseSelector() for deployment
  //----------------------------------------------
  const { cat, dog } = objTwoPet
  //-----------------------------------------------------

  return (
    <div>
      <HeadToHead cat={cat} dog={dog} />
      <Voting />
    </div>
  )
}

export default App
