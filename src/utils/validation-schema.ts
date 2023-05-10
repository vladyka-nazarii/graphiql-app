import * as yup from 'yup';

const emailValidation = yup
  .string()
  .required('Email is required')
  .matches(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    'Invalid email',
  );

const passwordValidation = yup
  .string()
  .required('Password is required')
  .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Wrong password format');

const confirmPasswordValidation = yup
  .string()
  .required('Confirm your password')
  .oneOf([yup.ref('password'), ''], 'Passwords must match');

export const validationSignUp = yup.object({
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export const validationSignIn = yup.object({
  email: emailValidation,
  password: passwordValidation,
});
