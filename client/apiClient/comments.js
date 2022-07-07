import request from 'superagent'

const commentUrl = '/api/comments'

export function postComment(commentObj, token) {
  return request
    .post(commentUrl)
    .set('authorization', `Bearer ${token}`)
    .send(commentObj)
    .then((res) => res.body)
}
