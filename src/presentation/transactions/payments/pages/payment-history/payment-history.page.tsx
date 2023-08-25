import {ButtonAtom} from '@components';
import type {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {PaymentHistoryPageProps} from './payment-history.type';

const PaymentHistoryPage = ({
  navigation,
}: PaymentHistoryPageProps): ReactElement => (
  <View>
    <Text>PaymentHistoryPage</Text>
    <ButtonAtom
      title="Go to Payment Detail Page"
      onPress={() =>
        navigation.navigate('PaymentDetailPage', {
          paymentId: '1',
        })
      }
    />
  </View>
);

export default PaymentHistoryPage;
