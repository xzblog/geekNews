/*
 * 按钮组件
 * @Author: Miracle
 */

import React from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import theme from '../config/theme';
import px2dp from '../utils/px2dp';
import PropTypes from 'prop-types';


export default class Button extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func
    };

    render(){
        const { onPress, text } = this.props;
        const content =
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        return (
            Platform.OS === 'android' ?
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    { content }
                </TouchableNativeFeedback>
            :
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={onPress}>
                    { content }
                </TouchableOpacity>
            )

    }
}

const styles = StyleSheet.create({
    button: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: theme.primaryColor
    },
    buttonText: {
        color: theme.white,
        fontSize: 14
    }
})

