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

import {Provider} from 'react-redux';
import persist from './src/config/store';

import {PersistGate} from 'redux-persist/integration/react';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Routes from './src/components/Routes';
import Main from './src/Main';
import store from './src/config/store';

const persistStore=persist();

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={persistStore.store}>
                <PersistGate loading={null} persistor={persistStore.persistor}>
                    <Main/>
                </PersistGate>
            </Provider>
        );
    }
}





