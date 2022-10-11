import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  login: {
    width: '100%',
    height: '100%',
  },
  formArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',

    padding: '1rem',

    welcome: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#2A7650',
    },

    inputArea: {
      backgroundColor: '#D9D9D9',
      height: '2rem',
      width: '100%',
      marginTop: '0.5rem',
      borderRadius: '5px',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      color: '#3B8952',
      fontWeight: '700',
    }
  }
});