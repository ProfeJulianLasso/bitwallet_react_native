import {useAuth0} from 'react-native-auth0';

export const useButtonLogout = () => {
  const {clearSession} = useAuth0();
  const onPressButtonLogout = async () => {
    try {
      await clearSession({}, {});
    } catch (err) {
      console.log(err);
    }
  };
  return {onPressButtonLogout};
};
