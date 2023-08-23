import {LoginPage} from '@module/security';
import {createStackNavigator} from '@react-navigation/stack';
import type {ReactElement} from 'react';
import {MainRouteParams} from './types';

const Stack = createStackNavigator<MainRouteParams>();

const MainRoute = (): ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default MainRoute;
