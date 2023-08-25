import {HistoryPage, TransactionDetailPage} from '@module/transactions';
import {createStackNavigator} from '@react-navigation/stack';
import type {ReactElement} from 'react';
import {TransactionsRouteParams} from './types';

const Stack = createStackNavigator<TransactionsRouteParams>();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const TransactionsRoute = (): ReactElement => (
  <Navigator>
    <Screen
      name="HistoryPage"
      component={HistoryPage}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="TransactionDetailPage"
      component={TransactionDetailPage}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default TransactionsRoute;
