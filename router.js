/*
 * 入口文件
 * @Author: Miracle
 */

import React from 'react';
import {Image, StatusBar, TouchableOpacity, SafeAreaView} from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import theme from './src/config/theme';

import Welcome from './src/view/welcome';
import Home from './src/view/home';
import Personal from './src/view/personal'
import Bookrack from './src/view/bookrack'
import Discover from './src/view/discover'
import Details from './src/view/details'
import Login from './src/view/user/login'
import Register from './src/view/user/register'
import ForgetPwd from './src/view/user/forgetPwd'
import Protocol from './src/view/user/protocol'
import UserInfo from './src/view/user/userinfo'
import Setting from './src/view/user/setting'
import Message from './src/view/user/message'
import Tags from './src/view/user/tags'

StatusBar.setBarStyle('light-content'); //更改状态栏颜色

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: <SafeAreaView style={{backgroundColor: theme.primaryColor}}/>
        },
    }
});

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Discover,
        navigationOptions: {
            header: null,
        },
    }
});

const BookrackStack = createStackNavigator({
    Bookrack: {
        screen: Bookrack,
        navigationOptions: {
            title: '书架',
            headerStyle: {
                backgroundColor: theme.primaryColor,
            },
            headerTintColor: theme.white,
        },
    }
});

const PersonalStack = createStackNavigator({
    Personal: {
        screen: Personal,
        navigationOptions: {
            title: '我的',
            headerStyle: {
                backgroundColor: theme.primaryColor,
            },
            headerTintColor: theme.white,
        }
    }
});

const Dashboard = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: '首页',
            }
        },
        Discover: {
            screen: DiscoverStack,
            navigationOptions: {
                tabBarLabel: '发现',
            }
        },
        Bookrack: {
            screen: BookrackStack,
            navigationOptions: {
                tabBarLabel: '书架',
            }
        },
        Personal: {
            screen: PersonalStack,
            navigationOptions: {
                tabBarLabel: '我的',
            }
        }
    },
    {
        initialRouteName: 'Personal',
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let icon;
                switch (routeName){
                    case 'Home':
                        icon = focused ? require("./src/res/icons/home-active.png") : require("./src/res/icons/home.png");
                        break;
                    case 'Discover':
                        icon = focused ? require("./src/res/icons/discover-active.png") : require("./src/res/icons/discover.png");
                        break;
                    case 'Bookrack':
                        icon = focused ? require("./src/res/icons/bookrack-active.png") : require("./src/res/icons/bookrack.png");
                        break;
                    default:
                        icon = focused ? require("./src/res/icons/my-active.png") : require("./src/res/icons/my.png");
                }
                return <Image style={{width: 24,height: 24}} source={icon}/>;
            },
            tabBarButtonComponent: TouchableOpacity,
        }),
        tabBarOptions: {
            activeTintColor: theme.primaryColor,
            inactiveTintColor: theme.infoColor,
            showIcon: true,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: theme.bgColor,
            }
        },
    }
);

Dashboard.navigationOptions = {
    header: null,
};

export default createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null,
        },
    },
    Dashboard,

    // 用户相关
    Login: {
        screen: Login,
        navigationOptions: {
            title: '登录',
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: '注册',
        },
    },
    ForgetPwd: {
        screen: ForgetPwd,
        navigationOptions: {
            title: '忘记密码',
        },
    },
    Protocol: {
        screen: Protocol,
        navigationOptions: {
            title: '用户协议',
        },
    },
    UserInfo: {
        screen: UserInfo,
        navigationOptions: {
            title: '用户信息',
        },
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            title: '设置',
        },
    },
    Message: {
        screen: Message,
        navigationOptions: {
            title: '消息中心',
        },
    },
    Tags: {
        screen: Tags,
        navigationOptions: {
            title: '标签管理',
        },
    },

    // 其他
    Details: {
        screen: Details,
        navigationOptions: {
            title: '详情'
        }
    },
},{
    initialRouteName: 'Dashboard',
    navigationOptions: {
        headerStyle: {
            backgroundColor: theme.primaryColor,
        },
        headerTintColor: theme.white,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
})
