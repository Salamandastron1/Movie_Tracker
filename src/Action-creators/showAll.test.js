import {showAll} from './showAll';

describe('showAll', () => {
  it('should return an object with type SHOW_ALL', () => {
    const expected = {
      type: 'SHOW_ALL',
    }

    const result = showAll()

    expect(result).toEqual(expected)
  })
})