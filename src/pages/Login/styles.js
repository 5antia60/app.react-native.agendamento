import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  login: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },  
  design_logo: {
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '25%',
    height: '25%'

  },
  botoes: {
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '25%',
    height: '25%',

    login: {
      color: 'white',
      fontSize: '20px',
      padding: '10px 60px',
      borderRadius: '5px',
      margin: '10px 0px',
      cursor: 'pointer'
    },
    cadastrar: {
      color: 'white',
      fontSize: '20px',
      padding: '10px 60px',
      borderRadius: '5px',
      margin: '10px 0px',
      cursor: 'pointer'
    },
    
  },
  formArea: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '50%',
    maxHeight: '50%',

    padding: '1rem',

    welcome: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#2A7650',
    },

    inputArea: {
      backgroundColor: '#D9D9D9',
      height: '3rem',
      width: '100%',
      marginTop: '1rem',
      borderRadius: '10px',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      color: '#76AC86',
      fontWeight: '700',
    }
  }
});