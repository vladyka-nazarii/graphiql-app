import { useFormik } from 'formik';
import { Button, TextField, Stack, Typography } from '@mui/material';

import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/slices/userSlice';
import { signUpUser } from '../../../firebase/sign-up-user';
import { validationSignUp } from '../../../utils/validation-schema';
import { Link } from 'react-router-dom';
import { useAuthError } from '../../../hooks/useAuthError';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { firebaseError, setFirebaseError } = useAuthError();

  const { values, touched, errors, handleSubmit, handleChange } = useFormik({
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

  const handleSignUp = async (email: string, password: string) => {
    try {
      const { user } = await signUpUser(email, password);
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
          Sign Up
        </Typography>
        <Stack spacing={0.5}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && (!!errors.email || !!firebaseError.emailError)}
            helperText={(touched.password && (errors.email || firebaseError.emailError)) || ' '}
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
          <TextField
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            error={touched.password && (!!errors.password || !!firebaseError.passwordError)}
            helperText={
              (touched.password && (errors.password || firebaseError.passwordError)) || ' '
            }
          />
        </Stack>
        <Stack spacing={0.5}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Sign Up
          </Button>
          <Typography variant="subtitle1" gutterBottom>
            if you <Link to="/login">already have account</Link>
          </Typography>
        </Stack>
      </Stack>
    </form>
  );
};
