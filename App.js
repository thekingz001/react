import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import login from './components/login';
import register from './components/register';
import home from './components/home';

const RootStack = createStackNavigator(
  {
    home: home,
    registet: register,
    auth: login,
  },
  {
    initialRouteName: 'auth',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}