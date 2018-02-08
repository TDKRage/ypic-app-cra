import { LOCATION_CHANGE } from 'react-router-redux';
import { TOGGLE_APP_DRAWER, TOGGLE_YPC_MUSIC } from './actions';

const initialState = {
  active: false,
  ypcMusicOpen: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      return {
        ...state,
        active: false,
      };
    }
    case TOGGLE_APP_DRAWER:
      return {
        ...state,
        active: !state.active,
      };
    case TOGGLE_YPC_MUSIC:
      return {
        ...state,
        ypcMusicOpen: !state.ypcMusicOpen,
      };
    default:
      return state;
  }
};

