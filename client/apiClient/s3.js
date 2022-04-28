
// const baseUrl = 'http://localhost:3001'

export async function getImageUrl(file) {
  const requestObject = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type
    })
  }

  const res = await fetch('/api/image', requestObject)
  const { signedUrl } = await res.json()

  await fetch(signedUrl, {
    method: 'PUT',
    body: file
  })
  console.log('signedUrl:', signedUrl)
  const imageUrl = signedUrl.split('?')[0]
  console.log(imageUrl)
}