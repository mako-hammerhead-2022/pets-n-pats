import React from 'react'

import { HeadToHead } from './HeadToHead.jsx'
import { HeadComment } from './HeadComment'

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
      {/* child button component here */}
      <HeadComment cat={cat} dog={dog} />
    </div>
  )
}

export default App
