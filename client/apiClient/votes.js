import request from 'superagent'

const votesURL = '/api/votes'

// function to post the votes to the winner
export function postVotes(winnerId) {
  return (
    // requesting to patch to /api/votes/add
    request
      .patch(`${votesURL}/add`)
      // send the winner along with points, from postVotes in Voting component
      .send({ winnerId: winnerId })
      // take the response/result from server side Api, and return it to the calling function
      .then((res) => res.body)
  )
}

export default {
  postVotes,
}
