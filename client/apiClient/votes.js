import request from 'superagent'

const votesURL = '/api/votes'

export function postVotes(winnerId) {
  return request
    .patch(`${votesURL}/add`)
    .send({ winnerId: winnerId })
    .then((res) => res.body)
}

export function postVotesTie(catId, dogId) {
  return request
    .patch(`${votesURL}/addTie`)
    .send({ catId: catId, dogId: dogId })
    .then((res) => res.body)
}

export default {
  postVotes,
  postVotesTie,
}
