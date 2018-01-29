import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import api from './api';
import pages from './pages';
import appDrawer from './app-drawer';

export default combineReducers({
  api,
  appDrawer,
  pages,
  routing: routerReducer,
  form,
});

