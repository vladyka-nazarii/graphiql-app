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
    .min(8, t(Validation.MinLength) || Validation.MinLength)
    .matches(/[a-zA-Zа-яА-ЯёЁєЄіІїЇ]{1,}/i, t(Validation.NeedLetter) || Validation.NeedLetter)
    .matches(/[0-9]{1,}/, t(Validation.NeedNumber) || Validation.NeedNumber)
    .matches(/[\W_]{1,}/i, t(Validation.NeedSymbol) || Validation.NeedSymbol);

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
