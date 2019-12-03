import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

var state = [];

export default class login extends Component {
    constructor(props) {
        super(props);
        state = {
            email: '',
            password: '',
        }
    }

    onClickListener = () => {
        // Alert.alert("Alert", "Button pressed " + viewId);
        console.log('Test Button');

        // const element = (
        //     <div>
        //         <h1>Hello, world!</h1>
        //         <h2>It is {new Date().toLocaleTimeString()}.</h2>
        //     </div>
        // );
        // // highlight-next-line
        // ReactDOM.render(element, document.getElementById('root'));

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text id={'root'} style={styles.main}>Login From</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
                <Link
                    to="/register"
                    underlayColor="#f0f4f7"
                    style={styles.navItem}>
                    <Text>register</Text>
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


// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   render() {
//     return (
//       <form>
//         <h1>Hello</h1>
//         <p>Enter your name:</p>
//         <input
//           type="text"
//         />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />);