import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTopTen } from '@/actions'

export default function Leaderboard() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTopTen())
  }, [])

  return <>Hello leaderboard</>
}
