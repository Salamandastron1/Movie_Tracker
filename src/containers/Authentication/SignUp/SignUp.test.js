import { SignUp } from './SignUp.js';
import React from 'react';
import * as mock from '../../../util/mocks.js';
import { shallow, mount } from 'enzyme';


describe('SignUp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <SignUp/> )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handle change on keypress', async () => {
    const expected = 'j';
    const spy = jest.spyOn(wrapper.instance(), 
    'handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find('#name').simulate('change', {
      target: {
        value: 'j',
        name: 'name',
      }
    });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('name')).toEqual(expected);
  });

});