import {nameReducer} from './nameReducer';

describe('nameReducer', () => {
  it('should return an initial state if type does not match', () => {
    const expected = ''
    const action = {
      type: 'DUMMY_TYPE',
      name: 'meow'
    }
    const result = nameReducer(undefined, action)

    expect(result).toEqual(expected)
  })
  it('should update state if type matches', () => {
    const expected = 'Jessica'
    const action = {
      type: 'GET_NAME',
      name: 'Jessica'
    }
    const result = nameReducer(undefined, action)

    expect(result).toEqual(expected)
  })
  it('should return a new state if type matches', () => {
    const expected = 'Tim'
    const action = {
      type: 'GET_NAME',
      name: 'Tim'
    }
    const mockState = 'Jessica'
    const result = nameReducer(mockState, action)

    expect(result).toEqual(expected)
  })
  it('should remove user when they log out', () => {
    const expected = ''
    const action = {
      type: 'LOG_OUT',
    }
    const mockState = 'Justin'
    const result = nameReducer(mockState, action)

    expect(result).toEqual(expected)
  })
})