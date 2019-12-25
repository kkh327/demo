import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    Text,
    Image,
} from 'react-native';


class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image style={{width: 120, height: 150}}
                   source={require('../images/logoiwt.png')}
                   resizeMode="contain"

            />
                <Text style={styles.logoText}>Universität Bremen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow : 1,
        backgroundColor:"#FFFFFF",
        justifyContent:"flex-end",
        alignItems:"center",
        marginVertical: 38,

    },

    logoText:{
        marginVertical:5,
        fontSize:20,
        color:'#000000',
        fontFamily: "Arial"
    }
});

export default Logo;
