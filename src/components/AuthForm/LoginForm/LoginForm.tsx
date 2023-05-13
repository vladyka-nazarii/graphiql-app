import { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { signInUser } from '../../../firebase/sign-in-user';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/slices/userSlice';
import { validationSignIn } from '../../../utils/validation-schema';
import { enqueueSnackbar } from 'notistack';
import { PasswordInput } from '../Inputs/PasswordInput/PasswordInput';
import { CustomTextInput } from '../Inputs/CustomTextInput/CustomTextInput';

export interface ILogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik<ILogin>({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSignIn,

    onSubmit: ({ email, password }) => {
      handleSignIn(email, password);
    },
  });

  const { handleSubmit } = formik;

  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await signInUser(email, password);
      setLoading(false);
      dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
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
              Sign In
            </Typography>
            <Stack spacing={0.5}>
              <CustomTextInput name="email" title="Email" />
              <PasswordInput />
            </Stack>
            <Stack spacing={0.5}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Sign In
              </Button>
              <Typography variant="subtitle1" gutterBottom>
                or you can <Link to="/register">create new account</Link>
              </Typography>
            </Stack>
          </Stack>
        </form>
      )}
    </FormikProvider>
  );
};
