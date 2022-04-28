import React from 'react'

import { HeadToHead } from './HeadToHead.jsx'

// import { fetchTwoPets } from '../actions/pets.js'
// TODO importing hard-coded data, - remove for deployment
import { objTwoPet } from '../../__mockdata__/mockPetData'

function App() {
  // TODO hard-coded for HeadToHead - replace with UseSelector() for deployment
  //----------------------------------------------
  const { cat, dog } = objTwoPet
  //-----------------------------------------------------

  // TODO: adjust tests to wrap components that depend on redux in a fakeStore
  // const dispatch = useDispatch()
  // const pets = useSelector((state) => state.pets)

  // useEffect(() => {
  //   dispatch(fetchTwoPets())
  // }, [])

  return (
    <div>
      {cat && dog && <HeadToHead cat={cat} dog={dog} />}
      {/* child button component here */}
    </div>
  )
}

export default App
