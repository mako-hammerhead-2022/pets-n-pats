import React, { useEffect } from 'react'
import Voting from './Voting'
import { useDispatch, useSelector } from 'react-redux'

import { HeadToHead } from './HeadToHead.jsx'
import { fetchTwoPets } from '../actions'

function App() {
  const dispatch = useDispatch()
  // #7 getting cat and dog from pets.js reducer in state
  // #8 assign that data to pets variable
  const pets = useSelector((state) => state.pets)

  // #1 !!Starting!!! as App component renders it triggers the fetchtwopets function
  useEffect(() => {
    dispatch(fetchTwoPets())
  }, [])

  return (
    <div>
      {pets?.cat && pets?.dog && (
        <>
          <HeadToHead cat={pets.cat} dog={pets.dog} />
          <Voting cat={pets.cat} dog={pets.dog} />
          {/** #9 passing the pet data from state to component.
           * Grabbing the object with cat key and dog key */}
        </>
      )}
    </div>
  )
}

export default App
