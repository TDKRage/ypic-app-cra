import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import api from './api';
import pages from './pages';

export default combineReducers({
  api,
  pages,
  routing: routerReducer,
  form,
});

