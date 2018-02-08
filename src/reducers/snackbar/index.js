import { SHOW_SNACKBAR, RESET_SNACKBAR } from './actions';

const initialState = {
  active: false,
  label: '',
  type: 'cancel',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        active: true,
        label: action.payload.label,
        type: action.payload.type,
      };
    case RESET_SNACKBAR:
      return initialState;
    default:
      return state;
  }
};
