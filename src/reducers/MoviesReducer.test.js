import * as mocks from '../util/mocks';
import {moviesReducer} from './moviesReducer';

describe('MoviesReducer', () => {
  // it('should return updated state', () => {
  //   const expected = [];

  //   const mockAction = {
  //     type: ''
  //   }

  //   expect(MoviesReducer(undefined, mockAction)).toEqual(expected)
  // })
  it('should add a new card to state', () => {
    const expected = [mocks.mockMovie]
    const mockAction = {
      type: 'SET_MOST_RECENT',
      ...mocks.mockMovie
    }
    expect(moviesReducer(undefined, mockAction)).toEqual(expected)
  })
  it()
})