import {StyleSheet} from 'react-native';

export const StyleButtonAtom = StyleSheet.create({
  containerInvisible: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
  },
  touchable: {
    backgroundColor: '#3F51B5',
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: 32,
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 8,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
