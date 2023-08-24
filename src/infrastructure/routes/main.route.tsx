import {LoginPage, useButtonLogout} from '@module/security';
import {createStackNavigator} from '@react-navigation/stack';
import type {ReactElement} from 'react';
import {ButtonAtom} from '../components/atoms';
import HomeRoute from './home.route';
import {MainRouteParams} from './types';

const Stack = createStackNavigator<MainRouteParams>();

const MainRoute = (): ReactElement => {
  const {onPressButtonLogout} = useButtonLogout();

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
          headerTitle: 'Home',
          headerBackground: () => null,
          headerLeft: () => null,
          headerRight: () => (
            <ButtonAtom title="LOGOUT" onPress={onPressButtonLogout} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRoute;
