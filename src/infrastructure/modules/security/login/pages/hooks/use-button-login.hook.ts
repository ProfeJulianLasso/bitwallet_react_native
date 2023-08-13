import {useAuth0} from 'react-native-auth0';

export const useButtonLogin = () => {
  const {authorize, error, isLoading, user} = useAuth0();
  const onPressButtonLogin = async () => {
    try {
      await authorize({}, {});
    } catch (err) {
      console.log(err);
    }
  };
  return {onPressButtonLogin, error, isLoading, user};
};
