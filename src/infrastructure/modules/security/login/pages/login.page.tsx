import {Image, StyleSheet, Text, View} from 'react-native';
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
          <Image source={{uri: user.picture}} style={stylesTmp.avatar} />
          <Text>Logged in as {user.nickname}</Text>
          <View style={stylesTmp.spaceTop}>
            <ButtonAtom title="LOGOUT" onPress={onPressButtonLogout} />
          </View>
        </>
      )}

      {error && <Text>{error.message}</Text>}
    </View>
  );
};

const stylesTmp = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  spaceTop: {
    ...StylesLoginPage.containerButtonLogin,
    marginTop: 16,
  },
});

export default LoginPage;
