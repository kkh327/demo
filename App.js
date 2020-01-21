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

import {Provider} from "react-redux";
import store from "./src/config/store";

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Routes from './src/Routes';




export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
            <View style={styles.container}>
                <StatusBar
                    backgroundcolor="#F0FFFF"
                    barStyle="light-content"
                />
            <Routes/>
            </View>
            </Provider>
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


