import {ButtonAtom} from '@components';
import {Text, View} from 'react-native';
import {HistoryPageProps} from './history.type';

const HistoryPage = ({navigation}: HistoryPageProps) => (
  <View>
    <Text>HistoryPage</Text>
    <ButtonAtom
      title="Go to Transaction Detail Page"
      onPress={() =>
        navigation.navigate('TransactionDetailPage', {
          transactionId: '1',
        })
      }
    />
  </View>
);

export default HistoryPage;
