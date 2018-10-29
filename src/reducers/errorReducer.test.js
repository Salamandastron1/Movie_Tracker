import { errorReducer } from './errorReducer';

describe('errorReducer', () => {
  it('should return default state if type does not match', () => {
    const expected = '';
    const action = {
      type: 'DUMMY_TYPE',
      error: 'This is an error!'
    }
    const result = errorReducer(undefined, action);
    expect(result).toEqual(expected);

  })
  it('should update state with string if type matches', () => {
     const expected = 'This is an error!';
     const action = {
       type: 'ERROR_RECEIVED',
       error: 'This is an error!'
     }
     const result = errorReducer(undefined, action);
     expect(result).toEqual(expected);
  });
  it('should always update state with a new string if type matches', () => {
    const expected = 'This is another error!';
    const action = {
      type: 'ERROR_RECEIVED',
      error: 'This is another error!'
    };
    const mockState = 'This is an error!';
    const result = errorReducer(mockState, action);
    expect(result).toEqual(expected);
  })
})