import * as mocks from '../../mocks';
import {MoviesReducer} from './MoviesReducer';

describe('MoviesReducer', () => {
  it('should return updated state', () => {
    const expected = [];

    const mockAction = {
      type: ''
    }

    expect(MoviesReducer(undefined, mockAction)).toEqual(expected)
  })
})