import { loginUser } from './loginUser';
import * as mocks from '../util/mocks';

describe('loginUser', () => {
  it('should return an action object', () => {
    const expected = {
      type: 'LOGIN_USER',
      userName: 'Jessica'
    }
    const mockLogin = 'Jessica'
    const result = loginUser(mockLogin)

    expect(result).toEqual(expected)
  })
})