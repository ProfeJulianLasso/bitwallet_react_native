import {LogoutButtonTemplate} from '@components';
import {LoginPage, useButtonLogout} from '@module/security';
import {createStackNavigator} from '@react-navigation/stack';
import type {ReactElement} from 'react';
import HomeRoute from './home.route';
import {MainRouteParams} from './types';

const Stack = createStackNavigator<MainRouteParams>();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const MainRoute = (): ReactElement => {
  const {onPressButtonLogout} = useButtonLogout();
  const headerRight = (): ReactElement => (
    <LogoutButtonTemplate onPress={onPressButtonLogout} />
  );
  const nullFunction = (): null => null;

  return (
    <Navigator>
      <Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Screen
        name="HomeRoute"
        component={HomeRoute}
        options={{
          headerTitle: 'Accounts',
          headerBackground: nullFunction,
          headerLeft: nullFunction,
          headerRight,
        }}
      />
    </Navigator>
  );
};

export default MainRoute;
