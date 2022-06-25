import React, { useEffect } from 'react'
import Voting from './Voting'
import { useDispatch, useSelector } from 'react-redux'

import HeadToHead from './HeadToHead'
import { fetchTwoPets } from '../actions'

function App() {
  const dispatch = useDispatch()

  const pets = useSelector((state) => state.pets.data)

  useEffect(() => {
    dispatch(fetchTwoPets())
  }, [])

  return (
    <div>
      {pets?.cat && pets?.dog && (
        <>
          <HeadToHead cat={pets.cat} dog={pets.dog} />
          <Voting cat={pets.cat} dog={pets.dog} />
        </>
      )}
    </div>
  )
}

export default App
