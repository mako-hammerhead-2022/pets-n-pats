import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchSortedPets } from '@/actions'
import PointsTable from '@/components/PointsTable'

export default function Leaderboard() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSortedPets())
  }, [])

  return (
    <>
      <h3>Pet Points Leaderboard</h3>
      <PointsTable />
    </>
  )
}
