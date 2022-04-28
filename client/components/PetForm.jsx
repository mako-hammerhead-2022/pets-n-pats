import React, { useState } from 'react'
import api from '../apiClient'

const PetForm = () => {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [animal, setAnimal] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => { 
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = () => {
    // console.log({ name, bio, animal, selectedFile })
    api.getImageUrl(selectedFile)
  }

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <label htmlFor="animal">They are a:</label>
      <select name="animal" id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
      <label htmlFor="image">Upload image:</label>
      <input type="file" name="image" id="image" accept="image/*" onChange={handleFileChange}/>
      <button onClick={handleSubmit}>Add Pet</button>
    </>
  )
}

export default PetForm
