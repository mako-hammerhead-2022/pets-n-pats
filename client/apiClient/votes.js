import request from 'superagent'

const votesURL = '/api/votes'

export function postVotes(winnerId) {
  return request
    .patch(`${votesURL}/add`)
    .send({ winnerId: winnerId })
    .then((res) => res.body)
}

export default {
  postVotes,
}
