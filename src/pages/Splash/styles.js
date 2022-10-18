import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  top: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '80%',
    height: '70%',

    image: {
      width: 100,
      height: 100,
      backgroundColor: 'black'
    },
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '30%',
    height: '30%',
    width: '100%',
    // backgroundColor: 'blue'
  
  }
  
});