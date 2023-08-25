import type {ReactElement} from 'react';
import {Pressable} from 'react-native';
import {ShadowedView} from 'react-native-fast-shadow';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleIconButtonAtom} from './icon-button.style';
import {IconButtonAtomType} from './icon-button.type';

const IconButtonAtom = ({
  icon,
  role,
  ...props
}: IconButtonAtomType): ReactElement => (
  <ShadowedView style={StyleIconButtonAtom.containerInvisible}>
    <Pressable
      {...props}
      role={role ?? 'button'}
      style={StyleIconButtonAtom.touchable}
      android_ripple={{color: '#0000001', borderless: true}}>
      <IconMci style={StyleIconButtonAtom.icon} name={icon} />
    </Pressable>
  </ShadowedView>
);

export default IconButtonAtom;
