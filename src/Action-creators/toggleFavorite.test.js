import { toggleFavorite } from './toggleFavorite';

describe('toggleFavorite', () => {
  it('should return an action object', () => {
    const expected = {
      type: 'TOGGLE_FAVORITE',
      id: 4,
    }
    const result = toggleFavorite(4);
    expect(result).toEqual(expected)
  })
})