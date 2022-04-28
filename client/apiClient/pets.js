
export async function addPet(formData) {
  const requestObject = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }
  const res = await fetch('/api/pets', requestObject)
  const newPet = await res.json()
  return newPet;
}