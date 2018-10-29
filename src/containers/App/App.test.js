import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

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
});


