import {HomePage} from '@presentation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import {ReactElement} from 'react';
import {HomeRouteParams, MainRouteParams} from './types';

type HomeRouteProps = StackScreenProps<MainRouteParams, 'HomeRoute'>;

const Tab = createBottomTabNavigator<HomeRouteParams>();

const HomeRoute = ({navigation}: HomeRouteProps): ReactElement => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomePage"
      component={HomePage}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default HomeRoute;
