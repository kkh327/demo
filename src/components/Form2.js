import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

class Form2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           placeholder={" Email Adresse"}
                           placeholderTextColor="#DCDCDC"
                           keyboardType="email-address"

                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> {this.props.type} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
        color: '#000000',
        marginVertical: 6,
    },
    button:{
        width:150,
        backgroundColor: '#2F4F4F',
        borderRadius: 5,
        marginVertical:23,
        paddingVertical:6,
    },

    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:"#DCDCDC",
        textAlign:"center",
    }

});

export default Form2;
