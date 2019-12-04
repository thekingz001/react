import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import styles from '../public/css';

var state = [];
const userinfo = { email: 'admin@admin', password: 'admin' };

export default class login extends Component {
    loginfuntion = async () => {
        console.log("This Email = " + this.state.email);
        if (userinfo.email === this.state.email && userinfo.password === this.state.password) {
            alert('Login');
            await AsyncStorage.setItem('islogin', "1")
            this.props.navigation.navigate('home')
        }
        else {
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