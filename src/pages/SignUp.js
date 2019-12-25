import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';

import {Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form2 from '../components/Form2';

class SignUp extends Component {



    render() {
        return (
            <View>
                <Logo/>
                <Form2 type="Registrieren"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Schon ein Account? </Text>
                    <TouchableOpacity >
                    <Text style={styles.signupButton}>Einloggen</Text>
                    </TouchableOpacity>
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
        marginVertical:-30,

    },
    signupText: {
        color: '#000000',
        fontSize: 12,

    },
    signupButton: {
        color: '#000000',
        fontSize: 13,
        fontWeight: '700',
    }

});


export default SignUp;
