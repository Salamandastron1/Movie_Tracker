import { SignIn } from './SignIn.js';
import React from 'react';
import * as mock from '../../../util/mocks.js';
import { shallow } from 'enzyme';
import * as API from '../../../util/helper'


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
});