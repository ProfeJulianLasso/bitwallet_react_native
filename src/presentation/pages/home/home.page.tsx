import {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {HomePageProps} from './home.type';

const HomePage = ({navigation}: HomePageProps): ReactElement => (
  <View>
    <Text>HomePage</Text>
  </View>
);

export default HomePage;
