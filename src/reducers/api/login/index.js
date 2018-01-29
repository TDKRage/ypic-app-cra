import { SET_USER, LOGOUT } from './actions';

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
