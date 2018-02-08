import { TOGGLE_LOADING_OVERLAY } from './actions';

const initialState = {
  show: false,
  text: 'Loading...',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOADING_OVERLAY:
      return { ...action.payload };
    default:
      return state;
  }
};

