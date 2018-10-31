import {favoritesReducer} from './favoritesReducer';

describe('favoritesReducer', () => {
  it('should return a default state if type does not match', () => {
    const expected = 'SHOW_ALL';
    const action = {
      type: 'GOBBLEDY_GOOK'
    }
    const result = favoritesReducer(undefined, action)

    expect(result).toEqual(expected)
  })
  it('should return a new state of /showFavorites/ if type is SHOW_FAVORITES ', () => {
    const expected = 'SHOW_FAVORITES'
    const action = {
      type: 'SHOW_FAVORITES'
    }
    const result = favoritesReducer(undefined, action)

    expect(result).toEqual(expected)

  })
  it('should take revert to default when given type is SHOW_ALL', () => {
    const expected = 'SHOW_ALL'
    const action = {
      type: 'SHOW_ALL'
    }
    const result = favoritesReducer('SHOW_FAVORITES', action)

    expect(result).toEqual(expected)

  })
})