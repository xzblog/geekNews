import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, FlatList, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';
import theme from '../config/theme';
import px2dp from '../utils/px2dp';

import HotItem from './common/hotItem';
import Search from '../components/Search';
import request from "../utils/request";

const HOT_URL = "https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&limit=20&category=all&recommend=1";
const BANNER_URL = "https://banner-storage-ms.juejin.im/v1/web/page/aanner?position=topic-banner&platform=web&page=0&pageSize=20&src=app"
export default class Discover extends React.Component {
    state = {
        data: [],
        bannerList: []
    };

    fetchHotData() {
        request(HOT_URL)
            .then((responseData) => {
                this.setState({
                    data: responseData.d.entrylist,
                });
            });
    }

    fetchBannerList() {
        request(BANNER_URL)
            .then((responseData) => {
                this.setState({
                    bannerList: responseData.d.banner,
                });
            });
    }

    componentDidMount(){
        this.fetchHotData();
        this.fetchBannerList();
    }
    render() {
        const { data, bannerList } = this.state;
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.searchBox}>
                        <Search/>
                    </View>
                    <ScrollView >
                        <View style={styles.swiper}>
                            <Swiper
                                autoplay={true}
                                paginationStyle={styles.paginationStyle}
                                dotStyle={styles.dotStyle}
                                activeDotStyle={styles.activeDotStyle}
                                key={bannerList.length}
                            >
                                {
                                    bannerList.map(item=> {
                                        return (
                                            <Image resizeMode="cover" key={item.objectId} source={{uri:item.screenshot}} style={styles.swiperItem} />
                                        )
                                    })
                                }
                            </Swiper>
                        </View>
                        <View style={styles.menu}>
                            <View style={styles.menuItem}>
                                <Image source={require('../res/icons/hot.png')} style={styles.menuIcon} />
                                <Text style={styles.menuText}>本周最热</Text>
                            </View>
                            <View style={styles.menuItem}>
                                <Image source={require('../res/icons/my-collect.png')} style={styles.menuIcon}/>
                                <Text style={styles.menuText}>收藏集</Text>
                            </View>
                            <View style={styles.menuItem}>
                                <Image source={require('../res/icons/activity.png')} style={styles.menuIcon}/>
                                <Text style={styles.menuText}>活动</Text>
                            </View>
                        </View>
                        <View style={styles.hotList}>
                            <View style={styles.hotTitle}>
                                <Image source={require('../res/icons/hot.png')} style={{width: 16, height: 16}} />
                                <Text style={styles.hotTitleText}>热门文章</Text>
                            </View>
                        </View>

                        <FlatList
                            style = {styles.list}
                            data = {data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem = {HotItem}
                        />

                    </ScrollView>
                </View>
            </SafeAreaView>

        );
    }
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.primaryColor,
    },
    container: {
        flex: 1,
        backgroundColor: theme.tintColor,
    },
    searchBox: {
        height: 50,
        backgroundColor: theme.primaryColor,
        padding: 8
    },
    cont:{
        padding: 10,
    },
    swiper: {
        height: 160,
        flexShrink: 0,
        flexGrow: 0,
        overflow: 'hidden',
    },
    swiperItem: {
        width: theme.screenWidth,
        height: 160,
    },
    paginationStyle: {
        bottom: 10,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: theme.white,
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: theme.white,
        borderRadius: 0,
    },
    line: {
        height: 84,
    },
    menu: {
        backgroundColor: theme.bgColor,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 15,
    },
    menuItem: {
        width: 120,
        alignItems: 'center',
    },
    menuIcon: {
        width: 35,
        height: 35,
        marginBottom: 8,
    },
    menuText: {
        textAlign: 'center',
        fontSize: 12
    },
    hotList: {
        marginTop: 10,
    },
    hotTitle: {
        height: px2dp(40),
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.bgColor,
        borderBottomColor: theme.tintColor,
        borderBottomWidth: 1,
    },
    hotTitleText: {
        fontSize: 15,
        marginLeft: 8,
    }

});

