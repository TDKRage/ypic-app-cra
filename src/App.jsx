import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './reducers/store';

import Main from './components/main';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default App;

