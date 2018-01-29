import { push } from 'react-router-redux';

const { firebase } = window;

export const loginUserEmailAsync = ({ email, password }) => async (dispatch) => {
  try {
    const loginResponse = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(loginResponse);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      alert('Email and/or Password invalid. Please try again or sign up with email.');
    }
  }
};

export const signInCheck = (loginRoute, homeRoute) => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(push(homeRoute));
    } else {
      dispatch(push(loginRoute));
    }
  });
};

