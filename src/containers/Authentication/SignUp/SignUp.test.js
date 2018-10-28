import SignUp from './SignUp.js';
import * as mock from './mocks.js';
import { shallow } from 'enzyme';


describe('SignUp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <SignUp/> )
  }) 
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})