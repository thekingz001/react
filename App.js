import React, { Component } from 'react';
import {    
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import { NativeRouter, Route } from "react-router-native";

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
  }
});

import login from './components/login';
import register from './components/register';

export default class App extends Component {

  render() {
    return (
      <NativeRouter>
        <View style={styles.container} >
          <Route exact path="/" component={login} />
          <Route path="/register" component={register} />
        </View>
      </NativeRouter>
    );
  }
}