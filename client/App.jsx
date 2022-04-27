import React, { useEffect } from 'react'
import { Link, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchTwoPets } from './actions'
function App() {
  const dispatch = useDispatch()
  const randomPets = useSelector((state) => state.pets)

  useEffect(() => {
    dispatch(fetchTwoPets())
  }, [])
  console.log(randomPets)
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <h2>{"Welcome to Pets 'n' Pats"}</h2>
      <Routes></Routes>
    </div>
  )
}

export default App
