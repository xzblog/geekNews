/*
 * 设置
 * @Author: Miracle
 */

import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import { Button, Line } from "../../components";
import theme from '../../config/theme';

export default class Setting extends Component{

    linkToModifyPwd = () => {
        this.props.navigation.navigate('ForgetPwd');
    };

    linkToAboutUs = () => {
        this.props.navigation.navigate('AboutUs');
    };

    loginOut = async () =>{
        await AsyncStorage.removeItem('userId');
        this.props.navigation.goBack();
    };

    render(){
        return(
            <View class={style.container}>
                <Text style={style.text}>设置页面</Text>
                <Line text="消息推送" />
                <Line text="修改密码" onPress={this.linkToModifyPwd} />
                <Line text="关于我们" onPress={this.linkToAboutUs}/>
                <Button text='退出登录' onPress={this.loginOut}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    text: {
        marginBottom: 50,
        color: theme.primaryColor
    },
    container: {
        flex: 1,
        width: theme.screenWidth * 0.9,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
    }
});
