import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import HeadComment from '../HeadComment'
import { objTwoPet } from '../../../__mockdata__/mockPetData'

describe('<HeadComment />', () => {
  it('renders on the screen', () => {
    render(<HeadComment ani={objTwoPet.cat} />)
    expect(2).toBe(2)
    // TODO: finish these tests
    // const addComment = screen.getByRole('button', {name: 'Add Comment'})
    // expect(addComment.textContent).toBe('Add Comment')
    // const submit = screen.getByRole('button', {name: 'Submit'})
    // expect(submit.textContent).toBe('Submit')
  })
})
