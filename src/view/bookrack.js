import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image
} from 'react-native';
import request from "../utils/request";
import theme from '../config/theme';

const URL = "https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime?uid=59175cf1a22b9d005813a118&client_id=1541744825578&token=eyJhY2Nlc3NfdG9rZW4iOiJYZDExdzBUcDF5UGhKdjI3IiwicmVmcmVzaF90b2tlbiI6IlluNnlic1lTWXZVSDZhazQiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&src=app&alias=&pageNum=1"

export default class Bookrack extends Component {
    state = {
        data: []
    };

    fetchList() {
        request(URL)
            .then((responseData) => {
                console.log(responseData)
                this.setState({
                    data: responseData.d,
                });
            });
    }

    componentDidMount(){
        this.fetchList();
    }
    _renderItem = ({item}) => {
        return(
            <View style={styles.item}>
                <Image resizeMode="contain" shadowColor='#ccc' shadowOffset={{width: 72, height: 100}} source={{uri: item.img}} style={styles.pic} />
                <View style={styles.info}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{item.userData && item.userData.username}</Text>
                    <Text style={styles.desc}>{item.buyCount}人已购买</Text>
                </View>
                <View style={styles.priceBox}>
                    <Text style={styles.price}>¥{item.price}</Text>
                </View>
            </View>
        )
    };

    render() {
        const { data } = this.state;
        return (
           <View style={styles.container}>
               <FlatList
                   style = {styles.list}
                   data = {data}
                   keyExtractor={(item, index) => index.toString()}
                   renderItem = {this._renderItem}
               />
           </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.tintColor
    },
    list: {

    },
    item: {
        backgroundColor: theme.bgColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: theme.tintColor,
        borderBottomWidth: 1
    },
    pic: {
        width: 72,
        height: 100,
    },
    info: {
        marginLeft: 10,
        width: (theme.screenWidth - 180)
    },
    title: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 10,
    },
    author: {
        fontSize: 12,
        marginBottom: 10,
    },
    desc: {
        fontSize: 12,
        color: theme.infoColor
    },
    priceBox: {
        width: 68,
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        backgroundColor: theme.tintColor,
        width: 60,
        lineHeight: 28,
        height: 28,
        color: theme.primaryColor,
        textAlign: 'center',
        borderRadius: 14,
        overflow: 'hidden'
    }
});
