/*
 * 热门Item
 * @Author: Miracle
 */

import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import { T } from '../../utils/util';
import theme from '../../config/theme';

const HotItem = ({item})=> {
    return (
        <View style={styles.hotItem}>
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.collectionCount}人点赞 · {item.user && item.user.username} · {T.timeAgo(T.getTimeStamp(item.createdAt))}</Text>
            </View>
            {item.screenshot ? <Image style={styles.cover} resizeMode='cover' source={{uri: item.screenshot}} /> : null}
        </View>
    )
};

const styles =  StyleSheet.create({
    hotItem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 60,
        backgroundColor: theme.bgColor,
        borderBottomColor: theme.tintColor,
        borderBottomWidth: 1,
        marginBottom: 1,
        padding: 10,
        flexDirection: 'row'
    },
    info: {
        flex: 1
    },
    title: {
        color: theme.fontColor,
        fontSize: 15,
        marginBottom: 10
    },
    desc: {
        color: theme.infoColor,
        fontSize: 12,
    },
    cover: {
        flexShrink: 0,
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 3
    }
});

export default HotItem
