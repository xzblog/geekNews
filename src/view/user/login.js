/*
 * 登录页面
 * @Author: Miracle
 */
import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, Platform, TouchableOpacity, AsyncStorage } from 'react-native';
import Button from '../../components/Button'
import theme from '../../config/theme'

export default class Login extends Component {
    state = {
        mobile: '',
        password: '',
        secureTextEntry: true,
    };

    _storeUserData = async () => {
        try {
            await AsyncStorage.setItem('userId', 'miracle');
        } catch (error) {
            console.log('储存用户信息失败：' + error);
        }
    };

    onClickLogin = () => {
        console.log('登录');
        this._storeUserData().then(()=>{
            this.props.navigation.navigate('Personal')
        });

    };

    changeVisible = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
        })
    };

    linkToProtocol = () => {
        this.props.navigation.navigate('Protocol')
    };

    linkToForgetPwd = () => {
        this.props.navigation.navigate('ForgetPwd')
    };

    linkToRegister = () => {
        this.props.navigation.navigate('Register')
    };

    render() {
        const {mobile, password, secureTextEntry} = this.state;
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
                               placeholder='请输入密码'
                               selectionColor={theme.primaryColor}
                               secureTextEntry={secureTextEntry}
                               onChangeText={(password) => this.setState({password})}
                               value={password}
                           />
                           <TouchableOpacity style={style.inputVisible} onPress={this.changeVisible} >
                               <Image style={style.inputVisibleIcon} resizeMode='contain' source={secureTextEntry ? require('../../res/icons/eye_close.png') : require('../../res/icons/eye_open.png')} />
                           </TouchableOpacity>
                       </View>
                   </View>

                   <Button text='登 录' onPress={this.onClickLogin} />
                   <View style={style.otherOperation}>
                       <TouchableOpacity  onPress={this.linkToForgetPwd} >
                           <Text style={style.forget}>忘记密码</Text>
                       </TouchableOpacity>
                       <TouchableOpacity  onPress={this.linkToRegister} >
                           <Text style={style.register}>立即注册</Text>
                       </TouchableOpacity>
                   </View>
               </View>

               <View style={style.bottom}>

                   <View style={style.otherLogin}>
                       <Text style={style.otherLoginText}>----- 其他登录方式  ------</Text>
                       <View style={style.otherLoginBox}>
                           <Image resizeMode='contain' style={style.otherLoginIcon} source={require('../../res/icons/WeChat.png')} />
                           <Image resizeMode='contain' style={style.otherLoginIcon} source={require('../../res/icons/qq.png')} />
                           <Image resizeMode='contain' style={style.otherLoginIcon} source={require('../../res/icons/github.png')} />
                       </View>
                   </View>
                   <Text style={style.protocolText}>登录即代表你同意 <Text style={style.protocol} onPress={this.linkToProtocol}>《用户协议》</Text></Text>
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
    input: {
        height: 44,
        borderColor: '#ddd',
        borderRadius: 3,
        borderBottomWidth: 1,
        marginBottom: 10,
        fontSize: 16
    },
    otherOperation: {
        fontSize: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    forget: {
        color: theme.infoColor,
    },
    register: {
        color: theme.primaryColor
    },

    bottom: {
        flexGrow: 0.4,
        flexShrink: 0,
        alignItems: 'center'
    },
    otherLogin: {
        width: theme.screenWidth * 0.8,
    },
    otherLoginText: {
        marginBottom: 20,
        color: theme.infoColor,
        textAlign: 'center'
    },
    otherLoginBox: {
        height: 80,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    otherLoginIcon: {
        width: 40,
        height: 40,
        borderRadius: Platform.OS === 'ios' ? 20 : 100,
    },
    protocolText: {
        color: theme.infoColor
    },
    protocol: {
        color: theme.primaryColor
    }
});
