import { useFormik } from 'formik';
import { Button, TextField, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { signInUser } from '../../../firebase/sign-in-user';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/slices/userSlice';
import { validationSignIn } from '../../../utils/validation-schema';
import { useAuthError } from '../../../hooks/useAuthError';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { values, touched, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '', //'test@test.com'
      password: '', //'asdf*1234'
    },

    validationSchema: validationSignIn,

    onSubmit: ({ email, password }) => {
      handleSignIn(email, password);
    },
  });

  const { firebaseError, setFirebaseError } = useAuthError();

  const handleSignIn = async (email: string, password: string) => {
    try {
      const { user } = await signInUser(email, password);
      dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
    } catch (error) {
      if (error instanceof Error) {
        setFirebaseError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} padding={'20px'} width={'300px'}>
        <Typography variant="h4" gutterBottom align="center">
          Sign In
        </Typography>
        <Stack spacing={0.5}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && (!!errors.email || !!firebaseError.emailError)}
            helperText={(touched.email && (errors.email || firebaseError.emailError)) || ' '}
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            error={touched.password && (!!errors.password || !!firebaseError.passwordError)}
            helperText={
              (touched.password && (errors.password || firebaseError.passwordError)) || ' '
            }
          />
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
  );
};
