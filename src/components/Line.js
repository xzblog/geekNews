/*
 * 行组件
 * @Author: Miracle
 */

import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../config/theme';
import px2dp from '../utils/px2dp';
import PropTypes from 'prop-types';

export default class Line extends React.Component{
    static propTypes = {
        icon: PropTypes.number,
        text: PropTypes.string.isRequired,
        rightContent: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
    };
    static defaultProps = {
        rightContent: ''
    };

    render(){
        const { icon, text, rightContent, onPress } = this.props;
        return(
            <TouchableOpacity activeOpacity={theme.activeOpacity} style={styles.line} onPress={onPress}>
                <Image source={icon} style={styles.icon}/>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.rightContent}>
                    {typeof rightContent === 'string' ?
                        <Text style={styles.desc}>{rightContent}</Text>
                        :
                        rightContent
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        backgroundColor: theme.bgColor,
        borderBottomColor: theme.tintColor,
        borderBottomWidth: 1
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 20,
    },
    text: {
        fontSize: 15,
        color: theme.fontColor
    },
    rightContent: {
        position: 'absolute',
        right: 15,
    },
    desc: {
        color: theme.infoColor
    }

});
