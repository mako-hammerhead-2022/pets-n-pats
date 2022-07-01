import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTwoPets } from '@/actions'

import Voting from '@/components/Voting'
import HeadToHead from '@/components/HeadToHead'

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
