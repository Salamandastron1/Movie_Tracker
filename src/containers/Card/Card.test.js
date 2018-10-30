import { Card } from './Card.js';
import { mapDispatchToProps } from './Card.js';
import React from 'react';
import { shallow } from 'enzyme';
import { postFavorites } from '../../thunks/postFavorites';

jest.mock('../../thunks/postFavorites');

describe('Card', () => {
  it('should match snapshot', () => {
    const movie = {
        title: 'Venom',
        poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        overview: 'This movie is RAD!',
        release_date: '2018-9-11',
        favorited: false,
      }

    const wrapper = shallow( <Card movie={movie} /> );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch will all of the correct params', () => {
  const movie = {
      title: 'Venom',
      id: 4,
      poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      overview: 'This movie is RAD!',
      release_date: '2018-9-11',
      vote_average: 5,
    }
  const mockDispatch = jest.fn();
  const mappedDispatch = mapDispatchToProps(mockDispatch);
  mappedDispatch.postFavorites(4, movie);
  expect(mockDispatch).toHaveBeenCalledWith(postFavorites(4, movie))
  expect(postFavorites).toHaveBeenCalled()
  })
})