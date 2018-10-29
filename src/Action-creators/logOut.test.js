import { logOut } from './logOut';

describe('logOut', () => {
  it('should create a logOut action object', () => {
    const expected = {
      type: 'LOG_OUT',
    }
    const result = logOut();

    expect(result).toEqual(expected)
  })
})