import { push } from 'react-router-redux';
import payloadAction from 'payload-action-creator';
import { HOME } from '../../../urls';

const { firebase } = window;

export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const setUser = payloadAction(SET_USER);
export const logout = payloadAction(LOGOUT);

export const loginUserEmailAsync = ({ email, password }) => async (dispatch) => {
  try {
    const loginResponse = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(push(HOME));
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/user-not-found') {
      alert('Email and/or Password invalid. Please try again or sign up with email.');
    }
  }
};

export const loginUserGoogleAsync = () => async (dispatch) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const loginResult = await firebase.auth().signInWithPopup(provider);
    console.log(loginResult);
    dispatch(push(HOME));
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = loginRoute => (dispatch) => {
  firebase.auth().signOut();
  dispatch(logout());
  dispatch(push(loginRoute));
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

