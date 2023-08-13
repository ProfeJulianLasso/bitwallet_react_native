import {ReactElement} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ShadowedView} from 'react-native-fast-shadow';
import {StyleButtonAtom} from './button.style';
import {ButtonAtomType} from './button.type';

const ButtonAtom = ({title, ...props}: ButtonAtomType): ReactElement => (
  <ShadowedView style={StyleButtonAtom.containerInvisible}>
    <Pressable
      android_ripple={{color: '#ffffff99', borderless: true}}
      style={StyleButtonAtom.touchable}
      {...props}>
      <View style={StyleButtonAtom.container}>
        <Text style={StyleButtonAtom.text}>{title ?? 'Button'}</Text>
      </View>
    </Pressable>
  </ShadowedView>
);

export default ButtonAtom;
