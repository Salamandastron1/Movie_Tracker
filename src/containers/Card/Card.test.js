import { Card } from './Card.js';
import { mapDispatchToProps } from './Card.js';
import React from 'react';
import { shallow } from 'enzyme';
import { toggleFavorite } from '../../Action-creators/toggleFavorite';


describe('Card', () => {
  it('should match snapshot', () => {
    let movie = {
        title: 'Venom',
        poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        overview: 'This movie is RAD!',
        release_date: '2018-9-11',
        favorited: false,
      }

    const wrapper = shallow( <Card movie={movie} /> );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call addFavorite on click', () => {

  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch will all of the correct params', () => {
  const mockDispatch = jest.fn();
  const mappedDispatch = mapDispatchToProps(mockDispatch);
  mappedDispatch.toggleFavorite(4);
  expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(4))

  })
})