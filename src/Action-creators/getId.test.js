import { getId } from './getId';
import * as mocks from '../util/mocks';

describe('getId', () => {
  it('should return an action object', () => {
    const expected = {
      type: 'GET_ID',
      id: 9,
    }
    const mockUserId = 9;
    const result = getId(mockUserId)

    expect(result).toEqual(expected)
  });
})