// eslint-disable-next-line
export const loginUserEmailAsync = ({email, password, rememberMe}) => async (dispatch) => {
  try {
    const loginResponse = await window.firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(loginResponse);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      alert('Email and/or Password invalid. Please try again or sign up with email.');
    }
  }
};

