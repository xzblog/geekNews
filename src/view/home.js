import { createMaterialTopTabNavigator } from 'react-navigation';
import Popular from './common/popular';
import theme from "../config/theme";

export default createMaterialTopTabNavigator({
    Recommend: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '推荐',
        }
    },
    Web: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '前端',
        }
    },
    End: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '后端',
        }
    },
    Android: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '安卓',
        }
    },
    Ios: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: 'Ios',
        }
    },
    Product: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '产品',
        }
    },
    Design: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '设计',
        }
    },
    Operate: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '运营',
        }
    },
    Read: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '阅读',
        }
    }
},{
    lazy: true,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        scrollEnabled: true,
        animationEnabled: false,
        tabStyle: {
            width: 80,
        },
        style: {
            backgroundColor: theme.primaryColor
        }
    }
});

