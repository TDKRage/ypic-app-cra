import payloadAction from 'payload-action-creator';

export const TOGGLE_APP_DRAWER = 'TOGGLE_APP_DRAWER';
export const TOGGLE_YPC_MUSIC = 'TOGGLE_YPC_MUSIC';

export const toggleAppDrawer = payloadAction(TOGGLE_APP_DRAWER);
export const toggleYPCMusic = payloadAction(TOGGLE_YPC_MUSIC);
