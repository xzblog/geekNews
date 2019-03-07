/*
 * 流行
 * @Author: Miracle
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import request from "../../utils/request";
import { T } from "../../utils/util";
import theme from "../../config/theme";
import HotItem from "./hotItem";
const BASE_URL = "https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank"
const dict = {
    Recommend: 'all',
    Web: '5562b415e4b00c57d9b94ac8',
    End: '5562b419e4b00c57d9b94ae2',
    Android: '5562b410e4b00c57d9b94a92',
    iOS: '5562b405e4b00c57d9b94a41',
    Product: '569cbe0460b23e90721dff38',
    Design: '5562b41de4b00c57d9b94b0f',
    Operate: '5b34a478e1382338991dd3c1',
    Read: '5562b428e4b00c57d9b94b9d',
};

export default class Popular extends Component {
    state = {
        limit: 20,
        dataList: [],
        empty: false,
        rankIndex: undefined, // 下一页标识
        refreshing: false,
        showFoot: 0
    };
    isRefreshing = false;

    // 获取数据
    fetchData(params) {
        const { limit, dataList, rankIndex, refreshing } = this.state;
        const baseData = {
            src: 'app',
            limit: limit,
            before: '',
            category: dict[this.props.navigation.state.routeName]
        };
        let oldList = dataList; // 这步操作是方便下拉刷新的时候清空列表的值
        const options = Object.assign({}, baseData, params); //合并参数

        // 发起请求
        request(BASE_URL + T.parseParams(options))
            .then((responseData) => {
                // 下拉刷新
                // 1、 清空dataList
                console.log(refreshing)
                if (this.isRefreshing) { // 操作为下拉刷新
                    this.isRefreshing = false;
                    oldList = [];
                    this.setState({
                        refreshing: false
                    })
                };
                // 上拉加载
                // 1、 0: 第一页（总数据为0）， 这一页没有（临界值情况）
                // 2、 <20 : 没有下一页
                // 3、 =20 : 有下一页（也可能是临界值）
                const realtimeList = responseData.d.entrylist;

                if (realtimeList.length === limit) { // 表示可能有下一页
                    const lastItem = realtimeList[realtimeList.length -1]; // 拿到最后项
                    this.setState({
                        showFoot: 1,
                        rankIndex: lastItem.rankIndex
                    })
                } else if ((realtimeList.length <= limit && realtimeList.length > 0) || (rankIndex && realtimeList.length <= limit)) {  // 没有更多了
                    this.setState({
                        showFoot: 2,
                        rankIndex: undefined
                    });
                }
                // 把实时数据加入总数据
                const totalList = oldList.concat(realtimeList);
                console.log(totalList);
                if(totalList.length){
                    console.log('1');
                    this.setState({
                        dataList: totalList,
                    });
                } else{
                    console.log('2');
                    this.setState({
                        empty: true,
                    });
                }

            });
    }
    // 下拉刷新
    pullToRefresh = () => {
        this.setState({
            refreshing: true
        });
        //加这个的原因是因为setState设置状态有时比异步请求数据还慢，请求完成后用state的值判断有问题
        this.isRefreshing = true;
        this.fetchData();
    };

    //上拉加载
    pullToLoad = () => {
        const { rankIndex } = this.state; // 请求下一页的标志
        if (rankIndex) {
            this.setState({
                showFoot: 1,
            });
            this.fetchData({before: rankIndex})
        }
    };

    componentDidMount(){
        this.fetchData();
    }

    // 没有数据时
    empty = () =>{
        return (
            <View style={styles.empty}>
                <Text>{this.state.empty ? '什么都没有哦！': '加载中，请稍后...'}</Text>
            </View>
        )
    }
    // 尾部组件
    footer = () => {
        const { showFoot } = this.state;
        return (
            showFoot ?
            <View style={styles.listFoot}>
                <Text style={styles.listFootText}>{showFoot === 1 ? '数据加载中...' : '没有更多数据啦！'}</Text>
            </View>
            :
            null
        )
    };
    render() {
        const { refreshing } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    style = {styles.list}
                    data = {this.state.dataList}
                    initialNumToRender={10}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {HotItem}
                    ListEmptyComponent={this.empty}
                    ListFooterComponent={this.footer}
                    onEndReached={this.pullToLoad}
                    onEndReachedThreshold={0.1}
                    onRefresh={this.pullToRefresh}
                    progressViewOffset={30}
                    refreshing={refreshing}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bgColor
    },
    text: {
        fontSize: 18,
        marginBottom: 20
    },
    button: {
        backgroundColor: 'tomato',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        borderRadius: 4,
        overflow: 'hidden'
    },
    list: {
        flex: 1,
    },
    listFoot: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listFootText: {
        color: '#999'
    },
    empty: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
