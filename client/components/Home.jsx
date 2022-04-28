import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HeadToHead } from './HeadToHead.jsx'

import { fetchTwoPets } from '../actions/pets.js'

function App() {
  const dispatch = useDispatch()
  const pets = useSelector((state) => state.pets)

  useEffect(() => {
    dispatch(fetchTwoPets())
  }, [])
  return (
    <div>
      {pets.cat && pets.dog && <HeadToHead cat={pets.cat} dog={pets.dog} />}
      {/* child button component here */}
    </div>
  )
}

export default App
