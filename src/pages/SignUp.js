import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';

import {Field, reduxForm} from 'redux-form';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import SignUpForm from '../components/SignUpForm';

import InputText from '../components/InputText';
import handleSubmit from 'redux-form/lib/handleSubmit';

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
        flexDirection: 'row',

    },
    signupText: {
        color: '#000000',
        fontSize: 12,

    },
    signupButton: {
        color: '#000000',
        fontSize: 13,
        fontWeight: '700',
    },
    button: {
        width: 160,
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
        paddingVertical:16,
    }
});


class SignUp extends Component {

    goBack() {
        Actions.pop();
    }

    createNewUser = () => {
        alert('boom');
    };

    onSubmit = (values) => {
        console.log(values);
    };

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
                {touched  && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    };


    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={styles.container}>

                <Logo/>
                <Field
                    name="email"
                    placeholder="@uni-bremen.de"
                    keyboardType="email-address"
                    component={this.renderTextInput}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={styles.buttonText}> Registrieren</Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Schon ein Account? </Text>
                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.signupButton}>Einloggen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const validate = (values) => {
    const errors = {};

     if(!values.email){
         errors.email="Gültige Email ist notwendig"
     }
     else if(!values.email.includes('@uni-bremen.de')){
         errors.email="Gültige Email ist notwendig"
     }
    return errors;
};
export default reduxForm({

    form: 'register',
    validate: validate,
})(SignUp);
