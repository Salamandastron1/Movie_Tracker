import * as mocks from '../../mocks';
import {setMostRecent} from './SetMostRecent'

describe('setMostRecent', () => {
  it('should return an action object', () => {
    const expected = {
      type: 'SET_MOST_RECENT',
      movies: [{
      poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      title: 'Venom',
      vote_average: 5}]
    }
    expect(setMostRecent(mocks.mockResults)).toEqual(expected)
  })
})