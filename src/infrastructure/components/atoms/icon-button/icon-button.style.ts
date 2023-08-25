import {StyleSheet} from 'react-native';

export const StyleIconButtonAtom = StyleSheet.create({
  containerInvisible: {
    overflow: 'hidden',
    borderRadius: 50,
    width: '100%',
  },
  touchable: {
    backgroundColor: 'transparent',
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 8,
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },
});
