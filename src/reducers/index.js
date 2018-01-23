import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as forms } from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  forms,
});

