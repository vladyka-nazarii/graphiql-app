import { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormikContext } from 'formik';

import { ILogin } from '../../LoginForm/LoginForm';

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { values, touched, errors, handleChange } = useFormikContext<ILogin>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" error={touched.password && !!errors.password}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      <FormHelperText>
        {(touched.password && errors.password && errors.password) || ' '}
      </FormHelperText>
    </FormControl>
  );
};
