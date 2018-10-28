import { SignUp } from './SignUp.js';
import React from 'react';
import * as mock from '../../../util/mocks.js';
import { shallow } from 'enzyme';


describe('SignUp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <SignUp/> )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handle change on keypress', () => {
    const result = wrapper.state('name');
    const expected = 'j';
    const spy = jest.spyOn(wrapper.instance(), 
    'handleChange');
    wrapper.find('[name = \'name\']').simulate('keypress', {
      char: 'j'
    });
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(expected);
  });

});