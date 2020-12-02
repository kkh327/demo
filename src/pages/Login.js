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

import {Field, reduxForm} from 'redux-form';
import InputText from '../components/InputText';


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
        paddingVertical: 20,
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
    button: {
        width: 150,
        backgroundColor: '#2F4F4F',
        borderRadius: 15,
        marginVertical: 23,
        paddingVertical: 6,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#DCDCDC',
        textAlign: 'center',
    },
    errorText:{
        color:"#FF0000",
        fontSize:15,
        paddingVertical:12,
    }
});


class Login extends Component {

    signup() {
        Actions.signup();
    }


    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput} />
                {(touched &&error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    };

    onSubmit = (values) => {
        console.log(values);
    };

    render() {
        const {handleSubmit} = this.props;
        return (

            <View style={styles.container}>
                <Logo/>
                <Field
                    name="id"
                    maxLength={7}
                    placeholder="ID Nummer"
                    keyboardType="numeric"
                    component={this.renderTextInput}
                />
                <Field
                    name="passwort"
                    placeholder="Passwort"
                    secureTextEntry={true}
                    component={this.renderTextInput}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={styles.buttonText}>Einloggen </Text>
                </TouchableOpacity>
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

const validate = (values) => {
    const errors = {};
    if(!values.id){
        errors.id="Gültige ID notwendig"
    }
    if(!values.passwort) {
        errors.passwort = "Gültiges Passwort notwendig"
    }
    return errors;
};


export default reduxForm({

    form: 'login',
    validate:validate,
})(Login);
