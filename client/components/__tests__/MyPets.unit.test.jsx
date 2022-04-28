import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { Provider } from 'react-redux'
import MyPets from '../MyPets'
import store from '../../store'
// import { fetchUserPets } from '../../actions'

jest.mock('../../store')
// jest.mock('../../actions')

describe('<MyPets /> renders users pets', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn(),
  }

  it('renders with the given prop', () => {
    fakeStore.getState.mockReturnValue({
      pets: [
        {
          id: 5,
          userId: '6',
          name: 'Dominique',
          bio: 'Reverse-engineered intermediate data-warehouse',
          imageUrl: 'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg',
          animal: 'cat',
          points: 190,
        },

        {
          userId: '6',
          name: 'Domin',
          bio: 'Reverse-engineered',
          imageUrl: 'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg',
          animal: 'dog',
          points: 140,
        },
      ],
    })

    render(
      <Provider store={fakeStore}>
        <MyPets />
      </Provider>
    )
    // screen.debug()
    // const dogName = screen.getByText('Orel')
    const petNames = screen.getAllByRole('heading')
    // console.log(petName.textContent)
    expect(petNames[0].textContent).toContain('Domin')
    expect(petNames).toHaveLength(2)
  })

  it('alt text renders accessible image', () => {
    fakeStore.getState.mockReturnValue({
      pets: [
        {
          id: 5,
          userId: '6',
          name: 'Dominique',
          bio: 'Reverse-engineered intermediate data-warehouse',
          imageUrl: 'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg',
          animal: 'cat',
          points: 190,
        },

        {
          userId: '6',
          name: 'Domin',
          bio: 'Reverse-engineered',
          imageUrl: 'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg',
          animal: 'dog',
          points: 140,
        },
      ],
    })
    render(
      <Provider store={fakeStore}>
        <MyPets />
      </Provider>
    )
    const petName = screen.getAllByAltText(
      /picture of the pet we put here in the tag of Dominique/i
    )

    expect(petName[0].src).toContain(
      'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg'
    )
    expect(petName[0]).toHaveProperty(
      'src',
      'https://cdn2.thecatapi.com/images/b5TojsXM1.jpg'
    )
  })
})