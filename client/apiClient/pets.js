import request from 'superagent'

export async function addPet(formData) {
  return request
    .post('/api/pets')
    .send(formData)
    .then(res => {
      return res.body;
    })
}