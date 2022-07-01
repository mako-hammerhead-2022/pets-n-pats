import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import PetForm from '@/components/PetForm.jsx'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { apiClientPet } from '~/__mockdata__/mockPetData'
const file = new File(['elephant_small'], 'elephant_small.png', {
  type: 'image/png',
})

jest.mock('@auth0/auth0-react')
jest.mock('@/apiClient')

describe('<PetForm /> renders when user is authenticated', () => {
  it('lets user submit a new pet', async () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {},
      getAccessTokenSilently: jest.fn(),
    })
    const mockHandleSubmit = jest.fn()
    const mockOnSuccess = jest.fn()

    render(<PetForm onSubmit={mockHandleSubmit} onSuccess={mockOnSuccess} />)
    const addPetButton = screen.getByRole('button', { name: /add pet/i })
    expect(addPetButton).toBeInTheDocument()

    await userEvent.click(addPetButton)

    const modal = screen.getByRole('dialog')
    expect(modal).toBeInTheDocument()

    const header = screen.getAllByRole('banner')[0]
    expect(header).toHaveTextContent(/add pet/i)

    const nameInput = screen.getByLabelText(/name/i)
    const bioInput = screen.getByLabelText(/bio/i)
    const animalInput = screen.getByLabelText(/animal/i)
    const imageInput = screen.getByLabelText(/image/i)
    await userEvent.type(nameInput, apiClientPet.name)
    await userEvent.type(bioInput, apiClientPet.bio)
    await userEvent.selectOptions(animalInput, 'dog')
    await userEvent.upload(imageInput, file)

    expect(imageInput.files[0]).toStrictEqual(file)

    const submitPetButton = screen.getAllByRole('button')[1]

    await userEvent.click(submitPetButton)

    waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalledWith({
        name: apiClientPet.name,
        bio: apiClientPet.bio,
        animal: 'dog',
        file,
      })
    })
  })
})
