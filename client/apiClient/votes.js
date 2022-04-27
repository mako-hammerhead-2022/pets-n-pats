import request from 'superagent'

const votesURL = '/api/votes'

export function postVotes(winnerId) {
  return (
    request
      .post(`${votesURL}/add`)
      // send the winner along with points
      .send({ winnerId: winnerId })
  )
}

export default {
  postVotes,
}
