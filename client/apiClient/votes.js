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

// export function updatePost(post) {
//   // convert the large paragraphs string into an array of paragraphs
//   post.paragraphs = post.paragraphs.split('\n')
//   return request
//     .patch(`/v1/posts/${post.id}`)
//     .send(post)
//     .then((res) => {
//       validateNoSnakeCase(res.body)
//       validatePostResponse('PATCH', 'v1/posts/:id', res.body)
//       return res.body
//     })
//     .catch(errorHandler('PATCH', '/v1/posts/:id'))
// }
