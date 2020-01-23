import PropTypes from "prop-types";
import React, {Component} from "react";
import {TextInput, Text, View, StyleSheet} from "react-native";

const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string
};

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    value: "numeric",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    label: ""
};

const styles = StyleSheet.create({
    inputBox: {
        width:350,
        backgroundColor:'green',
        borderRadius: 35,
        paddingHorizontal:18,
        paddingVertical:9,
        fontSize:20,
        color:'#ffffff',
        marginVertical: 10
    }
});
    class InputText extends Component<{}> {

        render() {
            const {placeholder, secureTextEntry, keyboardType, maxLength, value, onChangeText, onSubmitEditing} = this.props;
            return (
                <View>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder={placeholder}
                        placeholderTextColor="rgba(255,255,255,0.8)"
                        selectionColor="#999999"
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        maxLength={maxLength}
                        returnKeyType="next"
                        value={value}
                        onSubmitEditing={onSubmitEditing}
                        onChangeText={onChangeText} />
                </View>
            );
        }
    }


InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;


