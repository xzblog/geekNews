/*
 * 搜索框
 * @Author: Miracle
 */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../config/theme';

const Search = ()=> {
    return(
        <View style={styles.search}>
            <Image source={require('../res/icons/search.png')} style={styles.searchIcon} />
            <Text style={styles.searchText}>搜索</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    search: {
        height: 34,
        backgroundColor: 'rgba(255,255,255,0.2)',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        paddingLeft: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    searchText: {
        fontSize: 15,
        marginLeft: 15,
        color: '#f6f6f6'
    }
});
export default Search
