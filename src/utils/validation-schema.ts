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
  .matches(/.{8,}/, 'At least 8 characters')
  .matches(/[a-z]{1,}/i, 'At least 1 letter')
  .matches(/[0-9]{1,}/, 'At least 1 number')
  .matches(/[\W_]{1,}/i, 'At least 1 special symbol');

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
