import * as mocks from '../util/mocks';
import {moviesReducer} from './moviesReducer';

describe('MoviesReducer', () => {
  it('should not add a new movie if the action type isn\'t SET_MOST_RECENT', () => {
    const expected = [];

    const mockAction = {
      type: '',
      movie: 'this is where the movie lives'
    }

    expect(moviesReducer(undefined, mockAction)).toEqual(expected)
  });

  it('should add a new card to state', () => {
    const expected = [mocks.mockMovie]
    const mockAction = {
      type: 'SET_MOST_RECENT',
      movies: [mocks.mockMovie]
    }
    expect(moviesReducer(undefined, mockAction)).toEqual(expected)
  });

  it('should add many movies to state', () => {
    const initialState = [mocks.mockMovie]
    const expected = [mocks.mockMovie, mocks.mockMovie];
    const mockAction = {
      type: 'SET_MOST_RECENT',
      movies: [mocks.mockMovie]
    }

    expect(moviesReducer(initialState, mockAction)).toEqual(expected);
  });
  it('should toggle a favorite when type TOGGLE_FAVORITE is received', () => {
    const initialState = [mocks.mockMovie, mocks.mockMovie2]
    const expected = [mocks.mockMovie, mocks.mockFavorited]
    const mockAction = {
      type: 'TOGGLE_FAVORITE',
      id: 9,
    }
    const result = moviesReducer(initialState, mockAction)

    expect(result).toEqual(expected)
  })
})
