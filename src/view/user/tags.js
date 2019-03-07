/*
 * 标签管理
 * @Author: Miracle
 */

import React, { Component } from 'react';
import {View, Text, Switch, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import SortableListView from 'react-native-sortable-listview'
import theme from "../../config/theme";
const tagList = {
    Recommend: {
        id: 'all',
        title: '推荐',
        name: 'Recommend',
        status: true,
        order: 0
    },
    Web: {
        id: '5562b415e4b00c57d9b94ac8',
        title: '前端',
        name: 'Web',
        status: true,
        order: 1
    },
    End: {
        id: '5562b419e4b00c57d9b94ae2',
        title: '后端',
        name: 'End',
        status: true,
        order: 2
    },
    Android: {
        id: '5562b410e4b00c57d9b94a92',
        title: 'Android',
        name: 'Android',
        status: true,
        order: 3
    },
    iOS: {
        id: '5562b405e4b00c57d9b94a41',
        title: 'iOS',
        name: 'iOS',
        status: true,
        order: 4
    },
    Product: {
        id: '569cbe0460b23e90721dff38',
        title: '产品',
        name: 'Product',
        status: true,
        order: 5
    },
    Design: {
        id: '5562b41de4b00c57d9b94b0f',
        title: '设计',
        name: 'Design',
        status: true,
        order: 6
    },
    Operate: {
        id: '5b34a478e1382338991dd3c1',
        title: '运营',
        name: 'Operate',
        status: true,
        order: 7
    },
    Read: {
        id: '5562b428e4b00c57d9b94b9d',
        title: '阅读',
        name: 'Read',
        status: true,
        order: 8
    }
};



export default class Tags extends Component{
    state = {
        tags: tagList,
        order: Object.keys(tagList)
    };

    redrawList = (item, value) => {
        const { tags } = this.state;
        tags[item.name].status = value;
        this.setState({
            tags
        })
    };

    render(){
        const { tags, order } = this.state;
        return(
            <SortableListView
                style={{ flex: 1 }}
                data={tags}
                order={order}
                onRowMoved={e => {
                    order.splice(e.to, 0, order.splice(e.from, 1)[0]);
                    this.forceUpdate()
                }}
                renderRow={row => <RowComponent data={row} changeTagValue={(item, value)=> {this.redrawList(item, value)}} />}
            />
        )
    }
}

class RowComponent extends Component{
    handleChangeTag = (data, value) => {
        this.props.changeTagValue(data, value) // 反向触发伏组件重新渲染列表
    };

    render(){
        const { data } = this.props;
        return(
            <TouchableOpacity
                activeOpacity={theme.activeOpacity}
                underlayColor={theme.tintColor}
                style={style.rowBox}
                {...this.props.sortHandlers}
            >
                <View style={style.row}>
                    <Text style={style.title}>{data.title}</Text>
                    <Switch value={data.status} onValueChange={(value)=>this.handleChangeTag(data, value)} />
                </View>
            </TouchableOpacity>
        )
    }

}


const style = StyleSheet.create({
    rowBox: {
        backgroundColor: theme.bgColor,
        borderBottomWidth: 1,
        borderColor: theme.tintColor,
    },
    row: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: theme.fontColor,
        fontSize: 16
    }
});
