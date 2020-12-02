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


class Hilfe extends Component {


    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack()}>
                    <Text>
                        Gehe Zurück!
                    </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }

});
export default Hilfe;
