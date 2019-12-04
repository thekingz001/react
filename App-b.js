import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import login from './components/login';
import register from './components/register';
import home from './components/home';

const RootStack = createStackNavigator(
  {
    home: home,
    HomeScreen: HomeScreen,
    DetailsScreen: DetailsScreen,
    Register: register,
    AuthLoading: login,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}