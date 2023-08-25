import {ButtonAtom} from '@components';
import type {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {InvoicePageProps} from './invoice.type';

const InvoicePage = ({navigation}: InvoicePageProps): ReactElement => (
  <View>
    <Text>InvoicePage</Text>
    <ButtonAtom
      title="Go to Payment History Page"
      onPress={() => navigation.navigate('PaymentsHistoryPage')}
    />
  </View>
);

export default InvoicePage;
