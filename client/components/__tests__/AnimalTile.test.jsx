import React from 'react'

import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Home from '@/pages/Home'
import HeadToHead from '@/components/HeadToHead'
import AnimalTile from '@/components/AnimalTile'

jest.mock('react-redux')

describe('<AnimalTile />', () => {
  const fakeProps = {
    id: 2,
    userId: 'auth0|62c51507db258278248c7a0c',
    name: 'Aileen',
    bio: 'Fully-configurable intermediate focus group',
    imageUrl:
      '["https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg", "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4","https://www.northogdencity.com/sites/default/files/styles/full_node_primary/public/imageattachments/police/page/1971/golden-retriever-puppy.jpg?itok=3B6EF9n4","https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/03/GettyImages-512366437-e1583519258231-920x598.jpg"]',
    animal: 'dog',
    points: 11,
  }

  it('changes the image when prev button clicked', async () => {
    render(<AnimalTile animal={fakeProps} />)

    const sliderContainer = screen.querySelector('.carousel-root')

    const [, slides] = within(sliderContainer).getAllByRole('list')

    const slidesListItems = within(slides).getAllByRole('listitem')

    const nextButton = within(sliderContainer).getByRole('button', {
      name: /next slide/i,
    })
    const prevButton = within(sliderContainer).getByRole('button', {
      name: /previous slide/i,
    })

    const [, first, second, third] = slidesListItems

    expect(first).toHaveClass('selected')
    await userEvent.click(nextButton)
    expect(first).not.toHaveClass('selected')
    expect(second).toHaveClass('selected')
    await userEvent.click(nextButton)
    expect(second).not.toHaveClass('selected')
    expect(third).toHaveClass('selected')
    await userEvent.click(prevButton)
    expect(third).not.toHaveClass('selected')
    expect(second).toHaveClass('selected')
    await userEvent.click(
      within(sliderContainer).getByRole('button', { name: /slide item 1/i })
    )
    expect(first).toHaveClass('selected')
  })
})
