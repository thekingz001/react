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
      // console.log("This is email =", this.state.email);
      // console.log("This is password =", this.state.password);

      return fetch('http://192.168.1.11:5000/users/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          test1: this.state.email,
          test2: this.state.password,
        })
      })
      // .then(response => {
      //   console.log(JSON.stringify(response, null, 4))
      //   })
      // .catch(error =>{
      //   console.error(error);
      // })
      .done();
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