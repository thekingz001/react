import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../public/css';

export default class login extends Component {
  registerfuntion = async () => {
    return fetch('http://192.168.1.11:5000/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        name: this.state.name,
        password: this.state.password,
      })
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then((data) => {
          if (data.x == 'register') {
            alert('Register');
            this.props.navigation.navigate('auth')
        }
        else{
            alert('No Register');
            this.props.navigation.navigate('auth')
        }
        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      })
      .done();
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
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
            placeholder="Name"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name} />
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