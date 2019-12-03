import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
      <Router
          routes={config.router.routes}
          history={browserHistory}
      />
  </Provider>,
  document.getElementById('root')
);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div id="root">
          <h1>Hello, world Root!</h1>
        </div>

        <div id="test">
          <h1>Hello, world Test!</h1>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}