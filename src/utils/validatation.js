export const minLength = min => value =>
  (value && value.length < min ? `Must be ${min} characters or more` : undefined);

export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);

export const required = value => (value ? undefined : 'Required');

const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})');
export const passwordRule = value =>
  (value && !strongRegex.test(value) ? 'Must contain UPPERCASE, lowercase, numeric and special characters(!@#$%^&*_)' : undefined);

export const confirmPassword = (value, { password }) => (value && value !== password ? 'Passwords do not match' : undefined);
