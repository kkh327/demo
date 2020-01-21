import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import Routes from './components/Routes';


class Main extends Component {

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
    },

});

export default connect(null,null)(Main);


