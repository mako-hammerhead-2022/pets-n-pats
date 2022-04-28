import request from "superagent"

const commentUrl = '/api/comments'

export function postComment(commentObj) {
  return request.post(commentUrl)
  .send(commentObj)
  .then((res) => res.body)
}
