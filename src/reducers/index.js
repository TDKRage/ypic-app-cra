import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import pages from './pages';

export default combineReducers({
  pages,
  routing: routerReducer,
  form,
});

