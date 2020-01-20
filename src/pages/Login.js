import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';


import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import LogInForm from '../components/LogInForm';

class Login extends Component {

    signup() {
        Actions.signup();
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <LogInForm type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}> {'   '}Noch keinen Account? </Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signupButton}>Registrieren</Text>
                    </TouchableOpacity>
                    <View style={styles.hilfeTextCont}>
                        <Text style={styles.hilfeText}>Brauchst du Hilfe?</Text>
                        <TouchableOpacity>
                            <Text style={styles.hilfeButton}> Hilfe</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signupTextCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        flexDirection: 'row',
        marginVertical: -30,

    },
    signupText: {
        color: '#000000',
        fontSize: 12,
    },
    signupButton: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '700',

    },
    hilfeTextCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        flexDirection: 'row',

    },
    hilfeText: {
        color: '#000000',
        fontSize: 12,
    },
    hilfeButton: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '700',
    },
});

export default Login;
