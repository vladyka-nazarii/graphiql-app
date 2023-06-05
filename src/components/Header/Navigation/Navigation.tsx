import { useAuth } from '../../../hooks/useAuth';
import { signOutUser } from '../../../firebase/sign-out-user';
import { removeUser } from '../../../redux/slices/userSlice';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { NavigationButton } from '../../UI/NavigationButton/NavigationButton';
import CustomButton from '../../UI/CustomButton/CustomButton';

export const Navigation = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(removeUser());
  };

  return (
    <>
      <NavigationButton title="About" path="/welcome" />
      {isAuth ? (
        <>
          <NavigationButton title="Main Page" path="/" />
          <CustomButton title="Sign Out" onClick={signOutHandler} />
        </>
      ) : (
        <>
          <NavigationButton title="Login" path="/login" />
          <NavigationButton title="Register" path="/register" />
        </>
      )}
    </>
  );
};
