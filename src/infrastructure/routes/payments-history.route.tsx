import {InvoicePage} from '@module/reports';
import {PaymentHistoryPage} from '@module/transactions';
import {createStackNavigator} from '@react-navigation/stack';
import type {ReactElement} from 'react';
import {PaymentHistoryRouteParams} from './types';

const Tab = createStackNavigator<PaymentHistoryRouteParams>();
const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

const PaymentsHistoryRoute = (): ReactElement => (
  <Navigator>
    <Screen
      name="PaymentsHistoryPage"
      component={PaymentHistoryPage}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="PaymentDetailPage"
      component={InvoicePage}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default PaymentsHistoryRoute;
