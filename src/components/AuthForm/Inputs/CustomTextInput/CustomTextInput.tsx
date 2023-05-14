import { FC } from 'react';
import { useFormikContext } from 'formik';
import { TextField } from '@mui/material';
import { IRegister } from '../../RegisterForm/RegisterForm';

interface CustomTextInputIProps {
  name: string;
  title: string;
  type?: string;
}

export const CustomTextInput: FC<CustomTextInputIProps> = ({ name, title, type = 'text' }) => {
  const { values, touched, errors, handleChange } = useFormikContext<IRegister>();
  return (
    <TextField
      fullWidth
      name={name}
      label={title}
      type={type}
      value={values[name as keyof IRegister]}
      onChange={handleChange}
      error={touched[name as keyof IRegister] && !!errors[name as keyof IRegister]}
      helperText={(touched[name as keyof IRegister] && errors[name as keyof IRegister]) || ' '}
    />
  );
};
