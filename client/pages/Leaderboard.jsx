import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchSortedPets } from '@/actions'
import PointsTable from '@/components/PointsTable'
import './Leaderboard.css'

export default function Leaderboard() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSortedPets())
  }, [])

  return (
    <>
      <h3>Pet Points Leaderboard</h3>
      <p className='instruction'>(Hold Shift to Add Multiple Filters)</p>
      <PointsTable />
    </>
  )
}
