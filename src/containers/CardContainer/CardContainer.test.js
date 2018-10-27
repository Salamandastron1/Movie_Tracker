import React from 'react'
import CardContainer from './CardContainer'
import {mapStateToProps, mapDispatchToProps} from './CardContainer'
import * as mocks from '../../util/mocks';
import {setMostRecent} from '../../Action-creators/SetMostRecent';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const mockStore = configureMockStore()
    const initialState = {movies: []}
    const store = mockStore(initialState);

    const wrapper = shallow(<CardContainer store={store} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return the expected object', () => {
      const expected = { movies: 
        [
          { 
            poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
            title: 'Venom',
            vote_average: 5 ,
            overview: 'This movie is RAD!',
            release_date: '2018-9-11',
          }
        ] 
      };

      expect(mapStateToProps(mocks.mockState)).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function in MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setMostRecent(mocks.mockResults);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.onload(mocks.mockResults);

      expect(mockDispatch).toBeCalledWith(actionToDispatch);
    });
  });
});
