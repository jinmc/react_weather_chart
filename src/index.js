import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import './style/style.css';
import App from './components/App';
import reducers from './reducers';

const createStoreWidthMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWidthMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
