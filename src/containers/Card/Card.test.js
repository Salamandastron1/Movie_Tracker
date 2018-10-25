import Card from './Card.js';
import React from 'react';
import { shallow } from 'enzyme';


describe('Card', () => {
  it('should match snapshot', () => {
    const movie = {
        title: 'Venom',
        poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        overview: 'This movie is RAD!',
        release_date: '2018-9-11',
        favorited: false,
      }

    const wrapper = shallow(<Card ...movie />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call addFavorite on click', () => {

  });
});