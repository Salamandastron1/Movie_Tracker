import * as mocks from '../util/mocks';
import {moviesReducer} from './moviesReducer';

describe('MoviesReducer', () => {
  it('should return updated state', () => {
    const expected = [];

    const mockAction = {
      type: ''
    }

    expect(MoviesReducer(undefined, mockAction)).toEqual(expected)
  })
})