/**
 *@deprecated Komponente wird nicht mehr gebraucht redux ersetzt diese!!!
 */


import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';


class LogInForm extends Component {


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           placeholder={' ID Nummer '}
                           placeholderTextColor="#DCDCDC"
                           selectionColor="#ffffff"
                           onSubmitEditing={()=> this.password.focus()}
                           maxLength={7}
                           keyboardType="numeric"
                />
                <TextInput style={styles.inputBox}
                           placeholder={' Passwort'}
                           placeholderTextColor="#DCDCDC"
                           secureTextEntry={true}
                           ref={(input)=>this.password=input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        width: 360,
        backgroundColor: '#228B22',
        borderRadius: 35,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 20,
        marginVertical: 6,
        color: '#000000',
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
});

export default LogInForm;
