import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import api from './api';
import pages from './pages';
import appDrawer from './app-drawer';
import loadingOverlay from './loading-overlay';
import snackbar from './snackbar';

export default combineReducers({
  api,
  appDrawer,
  loadingOverlay,
  snackbar,
  pages,
  routing: routerReducer,
  form,
});

