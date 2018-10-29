import  * as mocks from '../util/mocks';
import {setMostRecent} from './setMostRecent'

describe('setMostRecent', () => {
  it('should return an action object', () => {
    const expected = {
      type: 'SET_MOST_RECENT',
      movies: [{
        title: 'Venom',
        poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        overview: 'This movie is RAD!',
        release_date: '2018-9-11',
      }],
    }

    const data = [{
      title: 'Venom',
      poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      overview: 'This movie is RAD!',
      release_date: '2018-9-11',
    }]

    const result = setMostRecent(data)
    expect(result).toEqual(expected)
  })
})
