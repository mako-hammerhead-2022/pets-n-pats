import React from 'react'
// import * as api from '../apiClient/index.js'
import { postVotes } from '../apiClient/votes.js'

const id = [4, 3]

// outter function wrapping all functions and return
function Voting() {
  // submit value
  function handleSubmit(winnerId) {
    if (winnerId !== 'skip') {
      postVotes(winnerId)
        .then(() => {
          console.log('It worked')
          // fetchnewpets (hannah r and vikrant to do)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // fetchnewpet
    // evt.preventDefault()
    // console.log(button)
  }

  return (
    <>
      <button value={id[0]} onClick={() => handleSubmit(id[0])}>
        {/* Cat Button */}
        Pick Me!
      </button>
      <button value={null} onClick={() => handleSubmit('skip')}>
        {/* Skip */}
        Skip, both cute!
      </button>
      <button value={id[1]} onClick={() => handleSubmit(id[1])}>
        {/* Dog Button */}
        No, Pick Me!
      </button>
    </>
  )
}

export default Voting
