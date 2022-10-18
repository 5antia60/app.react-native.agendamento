import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },

  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    image: {
      width: '10rem',
      height: '5rem',
      objectFit: 'cover'
    },
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '22rem',
    width: '100%',
    image3: {
      width: '100%',
      height: '100%',
      marginBottom: '-1rem',
    },
  
  }
  
});