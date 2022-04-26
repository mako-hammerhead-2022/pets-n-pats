import request from 'superagent'

const baseUrl = '/api/widgets'

export function fetchWidgets() {
  return request.get(`${baseUrl}/`).then((res) => {
    return res.body.widgets
  })
}
