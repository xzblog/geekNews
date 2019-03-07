/*
 * 欢迎页面
 * @Author: Miracle
 */
import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import theme from '../config/theme'

export default class Welcome extends Component {
    componentDidMount() {
        this.timer = setTimeout(()=> {
            this.props.navigation.replace('Dashboard')
        }, 3000)
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
           <View style={style.container}>
               <Image resizeMode='contain' style={{width: theme.screenWidth, height: theme.screenHeight}} source={require('../res/welcome.png')} />
           </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    welcome: {
        fontSize: 30,
        lineHeight: 45
    }
})
