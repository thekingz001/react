// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, WebView, } from 'react-native';
// import { NativeRouter, Route, Link } from "react-router-native";

// import home from './components/home';
// import about from './components/about';
// import page1 from './components/page1';

// const App = () => (
//   <NativeRouter>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link
//           to="/"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}>
//           <Text>Home</Text>
//         </Link>
//         <Link
//           to="/about"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}>
//           <Text>About</Text>
//         </Link>
//         <Link
//           to="/page1"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}>
//           <Text>page1</Text>
//         </Link>
//       </View>
//       <Route exact path="/" component={home} />
//       <Route path="/about" component={about} />
//       <Route path="/page1" component={page1} />
//     </View>
//   </NativeRouter>
// );

// export default App;

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#e5e5e5",
//   },
// });

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
          {/* <View style={styles.nav}>
            <Link
              to="/"
              underlayColor="#f0f4f7"
              style={styles.navItem}>
              <Text>login</Text>
            </Link>
            <Link
              to="/register"
              underlayColor="#f0f4f7"
              style={styles.navItem}>
              <Text>register</Text>
            </Link>
          </View> */}
          <Route exact path="/" component={login} />
          <Route path="/register" component={register} />
        </View>
      </NativeRouter>
      // <WebView
      //   javaScriptEnabled={true}
      //   domStorageEnabled={true}
      //   source={{ html: htmlContent }}
      // />

    );
  }
}