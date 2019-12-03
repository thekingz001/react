import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { Link } from "react-router-native";

var state = [];
const userinfo = {email: 'admin@admin', password: 'admin'} ;

export default class login extends Component {
    loginfuntion = () => {
        console.log("This Email = " + this.state.email);
        if(userinfo.email === this.state.email && userinfo.password === this.state.password){
            //alert('Login');
            this.AsyncStorage.setItem('islogin', "1")
        }
        else{
            alert('No Login');
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
                    <Text id={'root'} style={styles.main}>Login From</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })}
                        value = { this.state.email } />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })}
                        value = { this.state.password } />
                </View>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.loginfuntion()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Link
                    to="/register"
                    underlayColor="#f0f4f7"
                    style={styles.navItem}>
                    <Text>Register</Text>
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