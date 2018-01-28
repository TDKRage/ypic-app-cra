// eslint-disable-next-line
export const createEmailAccount = (email, password) =>async dispatch => {
  try {
    const createResponse = await window.firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(createResponse);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Email already in use.');
    }
  }
};
