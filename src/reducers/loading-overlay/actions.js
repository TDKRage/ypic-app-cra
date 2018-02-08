export const TOGGLE_LOADING_OVERLAY = 'TOGGLE_LOADING_OVERLAY';

export const toggleLoadingOverlay = (show, text) => (show ? ({
  type: TOGGLE_LOADING_OVERLAY,
  payload: {
    show,
    text,
  },
}) : ({
  type: TOGGLE_LOADING_OVERLAY,
  payload: {
    show,
    text: 'Loading...',
  },
}));

