import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import AddCommentPopover from '@/components/AddCommentPopover'
import { objTwoPet } from '~/test/fake-data'

describe('<AddCommentPopover />', () => {
  it('renders on the screen', () => {
    render(<AddCommentPopover animal={objTwoPet.cat} />)
    expect(2).toBe(2)
    // TODO: finish these tests
    // const addComment = screen.getByRole('button', {name: 'Add Comment'})
    // expect(addComment.textContent).toBe('Add Comment')
    // const submit = screen.getByRole('button', {name: 'Submit'})
    // expect(submit.textContent).toBe('Submit')
  })
})
