/*
 * 消息中心
 * @Author: Miracle
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Line } from "../../components";

export default class Message extends Component{
    render(){
        return(
            <View>
                <Line text="评论回复" icon={require('../../res/icons/like.png')} rightContent="0篇"/>
                <Line text="我赞过的" icon={require('../../res/icons/like.png')} rightContent="0篇"/>
                <Line text="收到的赞" icon={require('../../res/icons/like.png')} rightContent="0篇"/>
                <Line text="新增粉丝" icon={require('../../res/icons/like.png')} rightContent="0篇"/>
                <Line text="系统消息" icon={require('../../res/icons/like.png')} rightContent="0篇"/>
            </View>
        )
    }
}
