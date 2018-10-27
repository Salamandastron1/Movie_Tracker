import * as mocks from '../util/mocks';
import {MoviesReducer} from './moviesReducer';

describe('MoviesReducer', () => {
  it('should return updated state', () => {
    const expected = [];

    const mockAction = {
      type: ''
    }

    expect(MoviesReducer(undefined, mockAction)).toEqual(expected)
  })
})