import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import styles from '../public/css';
// const userinfo = { email: 'admin@admin', password: 'admin' };

export default class login extends Component {
    loginfuntion = async () => {
        return fetch('http://192.168.1.11:5000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.email,
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
                    if (data.x == 'login') {
                        alert('Login');
                        AsyncStorage.setItem('islogin', "1")
                        this.props.navigation.navigate('home')
                    }
                    else {
                        alert('No Login');
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
            password: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.main}>Login From</Text>
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
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.loginfuntion()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('registet')}>
                    <Text style={styles.loginText}>register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}