import * as yup from 'yup';
import { t } from 'i18next';

import { Validation } from '../types/enums';

const emailValidation = () =>
  yup
    .string()
    .required(t(Validation.EmailRequired) || Validation.EmailRequired)
    .matches(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      t(Validation.EmailInvalid) || Validation.EmailInvalid,
    );

const passwordValidation = () =>
  yup
    .string()
    .required(t(Validation.PasswordRequired) || Validation.PasswordRequired)
    .matches(/.{8,}/, t(Validation.Need8Characters) || Validation.Need8Characters)
    .matches(/[a-ї]{1,}/i, t(Validation.Need1Letter) || Validation.Need1Letter)
    .matches(/[0-9]{1,}/, t(Validation.Need1Number) || Validation.Need1Number)
    .matches(/[\W_]{1,}/i, t(Validation.Need1Symbol) || Validation.Need1Symbol);

const confirmPasswordValidation = () =>
  yup
    .string()
    .required(t(Validation.PasswordConfirm) || Validation.PasswordConfirm)
    .oneOf([yup.ref('password'), ''], t(Validation.PasswordMatch) || Validation.PasswordMatch);

export const validationSignUp = () =>
  yup.object({
    email: emailValidation(),
    password: passwordValidation(),
    confirmPassword: confirmPasswordValidation(),
  });

export const validationSignIn = () =>
  yup.object({
    email: emailValidation(),
    password: passwordValidation(),
  });
