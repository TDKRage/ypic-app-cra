import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './assets/react-toolbox/theme';
import store, { history } from './reducers/store';

import Main from './components/main';

import './assets/react-toolbox/theme.css';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default App;

