import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTopTen } from '@/actions'
import PointsTable from '@/components/PointsTable'

export default function Leaderboard() {
  const dispatch = useDispatch()
  const petScores = useSelector((state) => state.leaderboard.leaderboard)

  useEffect(() => {
    dispatch(fetchTopTen())
  }, [])

  return (
    <>
      <h3>Pet Points Leaderboard</h3>
      <PointsTable petScores={petScores} />
    </>
  )
}
