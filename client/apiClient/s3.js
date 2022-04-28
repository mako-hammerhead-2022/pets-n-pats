
// const baseUrl = 'http://localhost:3001'

export async function getSignedUrl(file) {
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
  
  const result = await fetch(signedUrl, {
    method: 'PUT',
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })
  console.log('signedUrl:', signedUrl)
  console.log('result:', result)
  const data = await result.json();
  console.log('final data:', data)
  // second fetch request
}