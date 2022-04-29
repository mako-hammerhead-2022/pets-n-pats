import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserPets } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'
import PetForm from './PetForm'

function MyPets() {
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()

  const pets = useSelector((state) => state.myPets)

  useEffect(() => {
    ;(async () => {
      const token = await getAccessTokenSilently()
      dispatch(fetchUserPets(token))
    })()
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
    <div className='MyPets'>
      <ul>{userInfo}</ul>
      <PetForm />
    </div>
  )
}

export default MyPets
