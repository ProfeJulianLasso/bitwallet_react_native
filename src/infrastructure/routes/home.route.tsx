import {TransferPage} from '@module/transactions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {ReactElement} from 'react';
import PaymentsRoute from './payments.route';
import TransactionsRoute from './transactions.route';
import {HomeRouteParams} from './types';

const Tab = createBottomTabNavigator<HomeRouteParams>();
const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

const HomeRoute = (): ReactElement => (
  <Navigator>
    <Screen
      name="HomePage"
      component={TransactionsRoute}
      options={{
        title: 'Accounts',
        headerShown: false,
      }}
    />
    <Screen
      name="TransfersPage"
      component={TransferPage}
      options={{
        title: 'Transfers',
        headerShown: false,
      }}
    />
    <Screen
      name="PaymentsPage"
      component={PaymentsRoute}
      options={{
        title: 'Payments',
        headerShown: false,
      }}
    />
  </Navigator>
);

export default HomeRoute;
