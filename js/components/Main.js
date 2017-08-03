import React, { Component } from 'react';
import GroupCreate from './GroupCreate';
import MemberList from './MemberList';
import { View } from 'react-native'


export default class Main extends Component {
    render() {
        return (<View>
            <GroupCreate />  
            <MemberList />   
        </View>);
    }
}