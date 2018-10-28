import { SignUp } from './SignUp.js';
import React from 'react';
import * as mock from '../../../util/mocks.js';
import { shallow } from 'enzyme';
import * as API from '../../../util/helper'


describe('SignUp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <SignUp/> )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateValue on change', async () => {
    const expected = 'j';
    const spy = jest.spyOn(wrapper.instance(), 
    'updateValue');
    wrapper.instance().forceUpdate();
    wrapper.find('.name').simulate('change', {
      target: {
        value: 'j',
        name: 'name',
      }
    });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('name')).toEqual(expected);
  });
  it('should call submitNewUser on submit', () => {
    const spy = jest.spyOn(wrapper.instance(), 
    'submitNewUser');
    wrapper.instance().forceUpdate();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(spy).toHaveBeenCalled();
  })
  it('should call addUser on submit', () => {
    API.addUser = jest.fn()
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(API.addUser).toHaveBeenCalled();
  })
  it('should display an error if email or password is wrong', () => {
    API.addUser = jest.fn(() => Error('status was not ok, 500 error'));

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    })

    expect()
  })
});


