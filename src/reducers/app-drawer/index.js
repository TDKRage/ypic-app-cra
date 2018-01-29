import { TOGGLE_APP_DRAWER } from './actions';

const initialState = {
  active: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_APP_DRAWER:
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
};

