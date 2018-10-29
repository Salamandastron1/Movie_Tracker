import { SignIn , mapStateToProps , mapDispatchToProps } from './SignIn.js';
import React from 'react';
import * as mock from '../../../util/mocks.js';
import { shallow } from 'enzyme';
import * as API from '../../../util/helper'
import { errorReceived } from '../../../Action-creators/errorReceived';
import { getId } from '../../../Action-creators/getId';
import { getName } from '../../../Action-creators/getName';
import { logOut } from '../../../Action-creators/logOut';
import configureMockStore from 'redux-mock-store';

describe('SignIn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <SignIn/> )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateValue on change', async () => {
    const expected = 'j';
    const spy = jest.spyOn(wrapper.instance(), 
    'updateValue');
    wrapper.instance().forceUpdate();
    wrapper.find('.email').simulate('change', {
      target: {
        value: 'j',
        name: 'email',
      }
    });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('email')).toEqual(expected);
  });
  it('should call loginUser on submit', () => {
    const spy = jest.spyOn(wrapper.instance(), 
    'loginUser');
    wrapper.instance().forceUpdate();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(spy).toHaveBeenCalled();
  })
  it('should call loginUser on submit', () => {
    API.loginUser = jest.fn()
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(API.loginUser).toHaveBeenCalled();
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockState = { 
        name: 'Jessica', 
        id: 9, 
        movies: [], 
        error: '' };
      const expected = { 
        id: 9 , 
        error: '' , 
        name: 'Jessica' };

      const result = mapStateToProps(mockState);

      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with all the correct params for loginUser', () => {
      const mockDispatch = jest.fn();
      const idAction = getId(5);
      const nameAction = getName('Justin'); 
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.loginUser(5, 'Justin');

      expect(mockDispatch).toHaveBeenCalledWith(idAction);
      expect(mockDispatch).toHaveBeenCalledWith(nameAction);
    });

    it('should call dispatch with no params for logoutUser', () => {
      const mockDispatch = jest.fn();
      const logoutAction = logOut();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logoutUser();

      expect(mockDispatch).toHaveBeenCalledWith(logoutAction);
    });

    it('should call dispatch with the correct params for setError', () => {
      const mockDispatch = jest.fn();
      const errorAction = errorReceived('ERROR ERROR ERROR');
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setError('ERROR ERROR ERROR');

      expect(mockDispatch).toHaveBeenCalledWith(errorAction);
    });
  });
});