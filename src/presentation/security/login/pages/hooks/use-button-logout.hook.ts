import {useAuth0} from 'react-native-auth0';

export const useButtonLogout = () => {
  const {clearSession} = useAuth0();
  const onPressButtonLogout = () => {
    const logout = async () => {
      try {
        await clearSession({}, {});
      } catch (err) {
        console.log(err);
      }
    };
    logout();
  };
  return {onPressButtonLogout};
};
