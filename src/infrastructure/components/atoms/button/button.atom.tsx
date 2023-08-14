import type {ReactElement} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ShadowedView} from 'react-native-fast-shadow';
import {StyleButtonAtom} from './button.style';
import {ButtonAtomType} from './button.type';

const ButtonAtom = ({title, role, ...props}: ButtonAtomType): ReactElement => (
  <ShadowedView style={StyleButtonAtom.containerInvisible}>
    <Pressable
      {...props}
      role={role ?? 'button'}
      style={StyleButtonAtom.touchable}
      android_ripple={{color: '#ffffff99', borderless: true}}>
      <View style={StyleButtonAtom.container}>
        <Text style={StyleButtonAtom.text}>{title ?? 'Button'}</Text>
      </View>
    </Pressable>
  </ShadowedView>
);

export default ButtonAtom;
