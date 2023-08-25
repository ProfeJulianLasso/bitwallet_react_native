import {PaymentPage} from '@module/transactions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import type {ReactElement} from 'react';
import PaymentsHistoryRoute from './payments-history.route';
import {PaymentsRouteParams} from './types';

const Tab = createMaterialTopTabNavigator<PaymentsRouteParams>();
const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

const PaymentsRoute = (): ReactElement => (
  <Navigator
    screenOptions={{
      tabBarStyle: {
        elevation: 0,
        backgroundColor: 'transparent',
      },
    }}>
    <Screen
      name="PaymentsPage"
      component={PaymentPage}
      options={{
        title: 'Payments',
      }}
    />
    <Screen
      name="PaymentsHistoryPage"
      component={PaymentsHistoryRoute}
      options={{
        title: 'Payments History',
      }}
    />
  </Navigator>
);

export default PaymentsRoute;
