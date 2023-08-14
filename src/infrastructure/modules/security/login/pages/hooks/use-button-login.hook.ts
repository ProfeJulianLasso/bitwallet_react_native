import {LoginTemplateType} from '@components';
import {useAuth0} from 'react-native-auth0';

export const useButtonLogin = () => {
  const {authorize, error, isLoading, user} = useAuth0();

  const onPressButtonLogin = () => {
    const login = async () => {
      try {
        await authorize({}, {});
      } catch (err) {
        console.log(err);
      }
    };
    login();
  };

  const loginTemplateProps: LoginTemplateType = {
    loginTemplate: {
      loginMolecule: {
        buttonAtomLogin: {
          title: 'SIGN IN / SIGN UP',
          onPress: onPressButtonLogin,
        },
      },
    },
  };

  return {loginTemplateProps, error, isLoading, user};
};
