import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      padding: 10
    },
    header: {
      textAlign: "center",
      fontSize: 20
    },
    nav: {
      flexDirection: "row",
      justifyContent: "space-around"
    },
    navItem: {
      flex: 1,
      alignItems: "center",
      padding: 10
    },
    subNavItem: {
      padding: 5
    },
    topic: {
      textAlign: "center",
      fontSize: 15
    },
    container: {
      // flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#DCDCDC',
  },
  main: {
      fontSize: 50,
  },
  inputContainer: {
      borderBottomColor: '#000000',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 300,
      height: 45,
      marginBottom: 20,
      //   flexDirection: 'row',
      alignItems: 'center'
  },
  inputs: {
      height: 45,
      //   marginLeft:16,
      borderBottomColor: '#FFFFFF',
      //   flex:1,
  },
  inputIcon: {
      width: 30,
      height: 30,
      // marginLeft:15,
      justifyContent: 'center'
  },
  buttonContainer: {
      height: 45,
      // flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // marginBottom:20,
      width: 250,
      borderRadius: 30,
  },
  loginButton: {
      backgroundColor: "#00b5ec",
  },
  loginText: {
      color: 'white',
  }
  });

  export default styles ;