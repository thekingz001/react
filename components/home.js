import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { Link } from "react-router-native";
import styles from '../public/css';

export default class Home extends Component {

  onClickListener = () => {
    console.log( "Email Is = " + state.email +
    "Name Is = " + state.name + 
    "Password Is = " + state.password );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.main}>Home From</Text>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.loginText}>SHOW TEXT ON LOG</Text>
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