/*
 * 找回密码页面
 * @Author: Miracle
 */
import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';
import Button from '../../components/Button'
import theme from '../../config/theme'

export default class ForgetPwd extends Component {
    state = {
        mobile: '',
        vCode: '',
        password: '',
        secureTextEntry: true,
    };

    handleClickToFindPwd = () => {
        console.log('找回密码')
    };

    handleClickFetchVCode = () => {
        console.log('获取验证码')
    };

    handleChangeVisible = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
        })
    };

    componentDidMount() {

    }

    render() {
        const {mobile, password, vCode, secureTextEntry} = this.state;
        return (
            <View style={style.container}>
                <View style={style.top}>
                    <View style={style.logoBox1}>
                        <View style={style.logoBox}>
                            <Image resizeMode='contain' style={style.logo} source={require('../../res/logo.png')} />
                        </View>
                    </View>
                </View>
                <View style={style.content}>
                    <View style={style.form}>
                        <TextInput
                            style={style.input}
                            placeholder='请输入手机号'
                            selectionColor={theme.primaryColor}
                            onChangeText={(mobile) => this.setState({mobile})}
                            clearButtonMode="while-editing"
                            keyboardType="numeric"
                            maxLength={11}
                            value={mobile}
                        />
                        <View style={style.inputGroup}>
                            <TextInput
                                style={style.input}
                                placeholder='请输入验证码'
                                keyboardType="numeric"
                                maxLength={4}
                                selectionColor={theme.primaryColor}
                                onChangeText={(vCode) => this.setState({vCode})}
                                value={vCode}
                            />
                            <TouchableOpacity style={style.inputVisible} onPress={this.handleClickFetchVCode} >
                                <Text style={style.getVCodeBtn}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={style.inputGroup}>
                            <TextInput
                                style={style.input}
                                placeholder='请输入密码'
                                selectionColor={theme.primaryColor}
                                secureTextEntry={secureTextEntry}
                                onChangeText={(password) => this.setState({password})}
                                value={password}
                            />
                            <TouchableOpacity style={style.inputVisible} onPress={this.handleChangeVisible} >
                                <Image style={style.inputVisibleIcon} resizeMode='contain' source={secureTextEntry ? require('../../res/icons/eye_close.png') : require('../../res/icons/eye_open.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button text='立即找回' onPress={this.handleClickToFindPwd} />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    top: {
        flexGrow: 0.2,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoBox1: {
        width: 140,
        height: 140,
        borderColor: theme.tintColor,
        borderWidth: 1,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoBox: {
        width: 114,
        height: 114,
        borderColor: theme.tintColor,
        borderWidth: 1,
        borderRadius: 57,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: Platform.OS === 'ios' ? 50 : 100,
    },
    content: {
        padding: 20,
        flexShrink: 0,
        flexGrow: 0.4
    },
    form: {
        marginBottom: 30
    },
    inputGroup: {
        position: 'relative'
    },
    inputVisible: {
        position: 'absolute',
        right: 6,
        top: 10,
    },
    inputVisibleIcon: {
        width: 26,
        height: 26
    },
    getVCodeBtn: {
        color: theme.infoColor
    },
    input: {
        height: 44,
        borderColor: '#ddd',
        borderRadius: 3,
        borderBottomWidth: 1,
        marginBottom: 10,
        fontSize: 16
    }
});
