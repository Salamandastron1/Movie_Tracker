import {showFavorites} from './showFavorites'

describe('showFavorites', () => {
  it('should return an object with type SHOW_FAVORITES', () => {
    const expected = {
      type: 'SHOW_FAVORITES',
    }

    const result = showFavorites();

    expect(result).toEqual(expected)
  })
})