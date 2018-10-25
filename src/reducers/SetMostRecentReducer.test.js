import * as mocks from '../../mocks';
import {SetMostRecentReducer} from './SetMostRecentReducer';

describe('SetMostRecentReducer', () => {
  it('should return updated state', () => {
    const expected = [];

    const mockAction = {
      type: ''
    }

    expect(SetMostRecentReducer(undefined, mockAction)).toEqual(expected)
  })
})