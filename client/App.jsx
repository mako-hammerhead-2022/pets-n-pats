import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import './App.css'

import Fetch from './components/Fetch'
import Counter from './components/Counter'
import Widgets from './components/Widgets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/counter'>Jeremy</Link>
          </li>
          <li>
            <Link to='/widgets'>Widgets</Link>
          </li>
        </ul>
      </nav>
      <h2>Welcome to Pets 'n' Pats</h2>
      <Routes>
        <Route path='/' element={<Fetch />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/widgets' element={<Widgets />} />
      </Routes>
    </div>
  )
}

export default App
