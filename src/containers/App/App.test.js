import React from 'react';
import ReactDOM from 'react-dom';
import App, { mapDispatchToProps, mapStateToProps } from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { logOut } from '../../Action-creators/logOut';

describe('App', () => {
  let mockStore;
  let initialState;
  let store;
  beforeEach(() => {
    mockStore = configureMockStore()
    initialState = {movies: []}
    store = mockStore(initialState);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App store={store} /> )

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockState = { 
        name: 'Jessica', 
        id: 9, 
        movies: [], 
        error: '' };
      const expected = { 
        id: 9 , 
        name: 'Jessica' };

      const result = mapStateToProps(mockState);

      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with no params for logoutUser', () => {
      const mockDispatch = jest.fn();
      const logoutAction = logOut();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logoutUser();

      expect(mockDispatch).toHaveBeenCalledWith(logoutAction);
    });
  });
});


