import type {ReactElement} from 'react';
import {View} from 'react-native';
import {LogoutButtonOrganism} from '../../organisms/logout-button';
import {StyleLogoutButtonTemplate} from './logout-button.style';
import {LogoutButtonTemplateType} from './logout-button.type';

const LogoutButtonTemplate = ({
  onPress,
}: LogoutButtonTemplateType): ReactElement => {
  const logout = {
    iconButtonAtom: {icon: 'logout', onPress},
  };

  return (
    <View style={StyleLogoutButtonTemplate.container}>
      <LogoutButtonOrganism button={logout} />
    </View>
  );
};

export default LogoutButtonTemplate;
