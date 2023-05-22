import { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/slices/userSlice';
import { signUpUser } from '../../../firebase/sign-up-user';
import { validationSignUp } from '../../../utils/validation-schema';
import { Link } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { CustomTextInput } from '../Inputs/CustomTextInput/CustomTextInput';
import { PasswordInput } from '../Inputs/PasswordInput/PasswordInput';
import { ILogin } from '../LoginForm/LoginForm';

export interface IRegister extends ILogin {
  confirmPassword: string;
}

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const formik = useFormik<IRegister>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSignUp,

    onSubmit: ({ email, password }) => {
      handleSignUp(email, password);
    },
  });

  const { handleSubmit } = formik;

  const handleSignUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await signUpUser(email, password);
      dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    }
  };

  return (
    <FormikProvider value={formik}>
      {loading ? (
        <CircularProgress />
      ) : (
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} padding={'20px'} width={'300px'}>
            <Typography variant="h4" gutterBottom align="center">
              {t('Sign Up')}
            </Typography>
            <Stack spacing={0.5}>
              <CustomTextInput name="ttyty" title="fghjfghjfghj" />
              <PasswordInput />
              <CustomTextInput name="confirmPassword" title="Confirm password" type="password" />
            </Stack>
            <Stack spacing={0.5}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                {t('Sign Up')}
              </Button>
              <Typography variant="subtitle1" gutterBottom>
                {t('You ')}
                <Link to="/login">{t('already have account')}</Link>
              </Typography>
            </Stack>
          </Stack>
        </form>
      )}
    </FormikProvider>
  );
};
