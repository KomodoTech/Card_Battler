import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import './styles/styles.scss';

// DEAL WITH RUNTIME ERROR ASYNC AWAIT
import 'regenerator-runtime/runtime';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);