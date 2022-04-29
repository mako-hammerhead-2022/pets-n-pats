import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserPets } from '../actions'

function MyPets() {
  const dispatch = useDispatch()
  // TODO add Auth for user ID
  const userId = 6

  const pets = useSelector((state) => state.myPets)

  useEffect(() => {
    dispatch(fetchUserPets(userId))
  }, [])

  const userInfo = pets?.map((pet, i) => {
    return (
      <li key={i}>
        {pet.id}
        <h2>{pet.name}</h2>
        <img
          src={pet.imageUrl}
          alt={`picture of the pet we put here in the tag of ${pet.name}`}
        />
        <p>{pets.bio}</p>
      </li>
    )
  })

  return (
    <div className="MyPets">
      <ul>{userInfo}</ul>
    </div>
  )
}

export default MyPets
