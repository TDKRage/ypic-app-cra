import { push } from 'react-router-redux';
import payloadAction from 'payload-action-creator';
import { toggleLoadingOverlay } from '../../loading-overlay/actions';
import { showSnackbar } from '../../snackbar/actions';
import { HOME } from '../../../urls';

const { firebase } = window;

export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const setUser = payloadAction(SET_USER);
export const logout = payloadAction(LOGOUT);

export const loginUserEmailAsync = ({ email, password }) => async (dispatch) => {
  dispatch(toggleLoadingOverlay(true, 'Signing In...'));
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(push(HOME));
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        dispatch(showSnackbar({
          label: 'Email and/or Password invalid. Please try again or sign up with email.',
          type: 'warning',
        }));
        break;

      default:
        dispatch(showSnackbar({
          label: error.code,
          type: 'warning',
        }));
        break;
    }
  }
  dispatch(toggleLoadingOverlay(false));
};

export const loginUserGoogleAsync = () => async (dispatch) => {
  dispatch(toggleLoadingOverlay(true, 'Signing In...'));
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  } catch (error) {
    dispatch(showSnackbar({
      label: error.code,
      type: 'warning',
    }));
  }
  dispatch(toggleLoadingOverlay(false));
};

export const loginUserFacebookAsync = () => async (dispatch) => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  } catch (error) {
    console.log(error);
  }
};

export const loginUserTwitterAsync = () => async (dispatch) => {
  try {
    const provider = new firebase.auth.TwitterAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = loginRoute => (dispatch) => {
  dispatch(toggleLoadingOverlay(true, 'Signing Out...'));
  firebase.auth().signOut();
  dispatch(logout());
  dispatch(push(loginRoute));
  dispatch(toggleLoadingOverlay(false));
};

export const signInCheck = (loginRoute, homeRoute) => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUser(user));
      dispatch(push(homeRoute));
    } else {
      dispatch(push(loginRoute));
    }
  });
};

export const redirectCheck = () => async (dispatch) => {
  dispatch(toggleLoadingOverlay(true, 'Signing In...'));
  try {
    const redirectResult = await firebase.auth().getRedirectResult();
  } catch (error) {
    dispatch(showSnackbar({
      label: error.code,
      type: 'warning',
    }));
  }
  dispatch(toggleLoadingOverlay(false));
};
