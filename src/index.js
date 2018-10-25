import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { rootReducer } from './reducers'

import './index.css';
import App from './containers/App/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
