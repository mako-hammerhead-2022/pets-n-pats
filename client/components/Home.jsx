import React from 'react'

import { HeadToHead } from './HeadToHead.jsx'

function App() {
  // hard-coded for HeadToHead - replace with UseSelector() for deployment
  //----------------------------------------------
  const { cat, dog } = {
    cat: {
      name: 'Giralda',
      bio: 'Customizable holistic conglomeration',
      imageUrl: 'https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg',
    },
    dog: {
      name: 'Orel',
      bio: 'Ameliorated dedicated extranet',
      imageUrl: 'https://wallpaperaccess.com/full/2378663.jpg',
    },
  }
  //-----------------------------------------------------

  return (
    <div>
      <HeadToHead cat={cat} dog={dog} />
      {/* child button component here */}
    </div>
  )
}

export default App
