import {View} from 'react-native';
import {LoginOrganism} from '@components';
import {LoginTemplateType} from './login.type';

const LoginTemplate = ({loginTemplate}: LoginTemplateType) => (
  <View>
    <LoginOrganism {...loginTemplate} />
  </View>
);

export default LoginTemplate;
