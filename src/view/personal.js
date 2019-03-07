
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Switch, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationEvents } from 'react-navigation'; // 用于订阅切面的切入切出，https://reactnavigation.org/docs/zh-Hans/navigation-lifecycle.html
import Line from '../components/Line';
import theme from "../config/theme";
// import { linkTo } from "../utils/util";


export default class Personal extends Component {
    state = {
        switchValue: false,
        userId: null,
    };

    _retrieveData = async () => {
        return await AsyncStorage.getItem('userId');
    };

    linkToTags = () => {
        this.props.navigation.navigate('Tags');
    };

    linkToSetting = () => {
        this.props.navigation.navigate('Setting');
    };

    linkToMessage = () => {
        this.props.navigation.navigate('Message');
    };

    handleClickPersonTop = () => {
        this.state.userId ?  this.props.navigation.navigate('UserInfo') : this.props.navigation.navigate('Login');
    };

    handleChangeTheme = () => {
        const { switchValue } = this.state;
        if(switchValue) {
            // publish.trigger('night');
        }
        this.setState({
            switchValue: !this.state.switchValue
        })
    };

    pageShow = () => {
        // 订阅页面的显示
        this._retrieveData().then( userId => {
            this.setState({ userId })
        });
    };

    componentDidMount(){

    }
    render() {
        const { switchValue, userId } = this.state;
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={this.pageShow}
                />
                <TouchableOpacity activeOpacity={theme.activeOpacity} style={styles.personTop} onPress={this.handleClickPersonTop} >
                    <Image source={userId ? require('../res/avatar.jpg') : require('../res/logo.png')}  style={styles.avatar}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{userId ? '长得丑活得久' : '未登录'}</Text>
                        <Text style={styles.desc}>{userId ? '做想做的事，做想做的人！' : '登录体验更多功能'}</Text>
                    </View>
                    <Image source={require('../res/icons/arrow-right.png')}  style={styles.arrow}/>
                </TouchableOpacity>

                <View style={styles.list}>
                    <Line text="消息中心" icon={require('../res/icons/notice.png')} onPress={this.linkToMessage}/>
                    <Line text="标签管理" icon={require('../res/icons/tags.png')} rightContent="20个" onPress={this.linkToTags}/>
                    <Line text="我的收藏" icon={require('../res/icons/collect.png')} rightContent="0个"/>
                    <Line text="最近浏览" icon={require('../res/icons/watched.png')} rightContent="10篇"/>

                </View>

                <View style={styles.list}>
                    <Line text="夜间模式" icon={require('../res/icons/night.png')} rightContent={<Switch
                        value={switchValue}
                        onValueChange={this.handleChangeTheme}
                    />}/>
                    <Line text="意见反馈" icon={require('../res/icons/feedback.png')}/>
                    <Line text="设置" icon={require('../res/icons/setting.png')} onPress={this.linkToSetting}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.tintColor,
        flex: 1,
    },
    personTop: {
        backgroundColor: theme.bgColor,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: theme.tintColor
    },
    info: {
        paddingLeft: 15,
    },
    name: {
       fontSize: 20,
        // color: globalColor.fontColor
        color: theme.fontColor
    },
    desc: {
        marginTop: 10,
        fontSize: 12,
        color: theme.infoColor
    },
    arrow: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 15
    },
    list: {
        marginTop: 10,
    }
});
