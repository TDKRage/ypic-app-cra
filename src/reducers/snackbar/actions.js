import payloadAction from 'payload-action-creator';

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const RESET_SNACKBAR = 'RESET_SNACKBAR';

export const showSnackbar = payloadAction(SHOW_SNACKBAR);
export const resetSnackbar = payloadAction(RESET_SNACKBAR);
