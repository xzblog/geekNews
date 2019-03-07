import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.navigation.getParam('id')
        }
    }
    render() {
        const { id } = this.state;
        return (
           <View style={style.container}>
               <Text>Welcome to {id} profile</Text>
           </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
