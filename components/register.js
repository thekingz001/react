import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../public/css';
var state = [];
const userinfo = { email: 'admin@admin', password: 'admin' };

export default class login extends Component {
  registerfuntion = async () => {
    if (userinfo.email === this.state.email && userinfo.password === this.state.password) {
      alert('Register');
    }
    else {
      alert('No Register');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.main}>Regisrer From</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password} />
        </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.registerfuntion()}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}