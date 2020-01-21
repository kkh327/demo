/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    Text,
} from 'react-native';


import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Routes from './src/Routes';




export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundcolor="#F0FFFF"
                    barStyle="light-content"
                />
            <Routes/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
});


