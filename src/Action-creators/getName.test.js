import { getName } from './getName';
import * as mocks from '../util/mocks';

describe('getName', () => {
  it('should return an action object', () => {
    const expected = {
      type: 'GET_NAME',
      name: 'Jessica',
    }
    const mockUserName = 'Jessica';
    const result = getName(mockUserName)

    expect(result).toEqual(expected)
  });
})