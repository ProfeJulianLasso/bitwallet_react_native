import {Image, Text, View} from 'react-native';
import {ButtonAtom} from '../../../../components';
import {useButtonLogin, useButtonLogout} from './hooks';
import {StylesLoginPage} from './login.style';

const LoginPage = () => {
  const {onPressButtonLogin, error, isLoading, user} = useButtonLogin();
  const {onPressButtonLogout} = useButtonLogout();

  return (
    <View style={StylesLoginPage.container}>
      {isLoading && <Text>Loading...</Text>}

      {!user && !isLoading && (
        <View style={StylesLoginPage.containerButtonLogin}>
          <ButtonAtom title="SIGN IN / SIGN UP" onPress={onPressButtonLogin} />
        </View>
      )}

      {user && !isLoading && (
        <>
          <Image
            source={{uri: user.picture}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <Text>Logged in as {user.nickname}</Text>
          <View
            style={{...StylesLoginPage.containerButtonLogin, marginTop: 16}}>
            <ButtonAtom title="LOGOUT" onPress={onPressButtonLogout} />
          </View>
        </>
      )}

      {error && <Text>{error.message}</Text>}
    </View>
  );
};

export default LoginPage;
