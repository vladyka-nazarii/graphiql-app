import { memo, useState } from 'react';
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

import { IRegister } from '../../RegisterForm/RegisterForm';

interface IPasswordInputProps {
  id: string;
  name: string;
  title: string;
}

export const PasswordInput = memo(({ id, name, title }: IPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { values, touched, errors, handleChange } = useFormikContext<IRegister>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" error={touched.password && !!errors.password}>
      <InputLabel htmlFor={id}>{title}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        value={values[name as keyof IRegister]}
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
        label={title}
      />
      <FormHelperText>
        {(touched.password && errors.password && errors.password) || ' '}
      </FormHelperText>
    </FormControl>
  );
});
