import { reset } from 'redux-form';
import { showSnackbar } from '../../snackbar/actions';
import { forgotPasswordForm } from '../../../utils/formNames';

const { firebase } = window;

export const createEmailAccount = (email, password) => async (dispatch) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      dispatch(showSnackbar({
        label: 'Email already in use.',
        type: 'warning',
      }));
    }
  }
};

export const sendResetEmail = email => async (dispatch) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    dispatch(showSnackbar({
      label: 'Password reset email sent!',
      type: 'cancel',
    }));
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      dispatch(showSnackbar({
        label: 'User not found please sign up.',
        type: 'warning',
      }));
    }
  }
  dispatch(reset(forgotPasswordForm));
};
