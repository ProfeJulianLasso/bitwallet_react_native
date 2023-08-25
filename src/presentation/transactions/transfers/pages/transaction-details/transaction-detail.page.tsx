import {ButtonAtom} from '@components';
import {Text, View} from 'react-native';
import {TransactionDetailPageProps} from './transaction-detail.type';

const TransactionDetailPage = ({navigation}: TransactionDetailPageProps) => (
  <View>
    <Text>TransactionDetailPage</Text>
    <ButtonAtom
      title="Go to History Page"
      onPress={() => navigation.navigate('HistoryPage')}
    />
  </View>
);

export default TransactionDetailPage;
