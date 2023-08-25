import {LogoutButtonTemplate} from '@components';
import {LoginPage, useButtonLogout} from '@module/security';
import {createStackNavigator} from '@react-navigation/stack';
import type {ReactElement} from 'react';
import HomeRoute from './home.route';
import {MainRouteParams} from './types';

const Stack = createStackNavigator<MainRouteParams>();

const MainRoute = (): ReactElement => {
  const {onPressButtonLogout} = useButtonLogout();
  const headerRight = (): ReactElement => (
    <LogoutButtonTemplate onPress={onPressButtonLogout} />
  );
  const nullFunction = (): null => null;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeRoute"
        component={HomeRoute}
        options={{
          headerTitle: 'Accounts',
          headerBackground: nullFunction,
          headerLeft: nullFunction,
          headerRight,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRoute;
