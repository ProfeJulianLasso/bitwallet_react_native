import {LoginTemplate} from '@components';
import {type ReactElement} from 'react';
import {Text, View} from 'react-native';
import {useButtonLogin, useRegisterNewUser} from './hooks';
import {StylesLoginPage} from './login.style';
import {LoginPageProps} from './login.type';

const LoginPage = ({navigation}: LoginPageProps): ReactElement => {
  const {loginTemplateProps, error, isLoading, user} = useButtonLogin();
  useRegisterNewUser();

  if (user && !isLoading) navigation.navigate('HomeRoute');

  return (
    <View style={StylesLoginPage.container}>
      {isLoading && <Text>Loading...</Text>}

      {!user && !isLoading && (
        <View style={StylesLoginPage.containerButtonLogin}>
          <LoginTemplate loginTemplate={loginTemplateProps.loginTemplate} />
        </View>
      )}

      {error && <Text>{error.message}</Text>}
      {user && !isLoading && <Text>{user.email}</Text>}
    </View>
  );
};

export default LoginPage;
