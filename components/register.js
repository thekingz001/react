import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import { Link } from "react-router-native";

var state = [];

export default class register extends Component {
  constructor(props) {
    super(props);
    state = {
      email: '',
      name: '',
      password: '',
    }
  }

  onClickListener = () => {
    console.log( "Email Is = " + state.email +
    "Name Is = " + state.name + 
    "Password Is = " + state.password );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.main}>Register From</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            value="test"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Name"
            value="test"
            keyboardType="name-address"
            underlineColorAndroid='transparent'
            onChangeText={(name) => this.setState({ name })} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            value="test"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener(email, name, password)}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>
        <Link
          to="/"
          underlayColor="#f0f4f7"
          style={styles.navItem}>
          <Text>Back</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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