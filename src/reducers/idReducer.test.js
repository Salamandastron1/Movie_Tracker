import {idReducer} from './idReducer';

describe('idReducer', () => {
  it('should return default state when type does not match', () =>{
    const expected = 0;
    const action = {
      type: 'NO_ID',
      id: 1,
    };
    const result = idReducer(undefined, action)

    expect(result).toEqual(expected)
  })
  it('should return an updated state when type matches', () => {
    const expected = 1;
    const action = {
      type: 'GET_ID',
      id: 1,
    }
    const result = idReducer(undefined, action);

    expect(result).toEqual(expected)
  })
  it('should return an a new state if a new id value is given', () => {
    const expected = 9;
    const action = {
      type: 'GET_ID',
      id: 9,
    }
    const mockState = 4;
    const result = idReducer(mockState, action)

    expect(result).toEqual(expected)
  })
  it('should remove id value when user logs out', () => {
    const expected = 0;
    const action = {
      type: 'LOG_OUT',
    }
    const mockState = 4;
    const result = idReducer(mockState, action)

    expect(result).toEqual(expected)
  })
})