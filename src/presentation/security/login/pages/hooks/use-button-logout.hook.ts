import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainRouteParams} from '@routes';
import {useAuth0} from 'react-native-auth0';

export const useButtonLogout = () => {
  const {clearSession} = useAuth0();
  const navigation = useNavigation<NavigationProp<MainRouteParams>>();
  const onPressButtonLogout = () => {
    const logout = async () => {
      try {
        await clearSession({}, {});
        navigation.navigate('LoginPage');
      } catch (err) {
        console.log(err);
      }
    };
    logout();
  };
  return {onPressButtonLogout};
};
