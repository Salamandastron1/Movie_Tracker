import { errorReceived } from './errorReceived';

describe('errorReceived', () => {
  it('should create an action error object', () => {
    const expected = {
      type: 'ERROR_RECEIVED',
      error: 'Email and Password do not match.'
    }
    const errorString = 'Email and Password do not match.';
    const result = errorReceived(errorString);
    expect(result).toEqual(expected);


  });
})