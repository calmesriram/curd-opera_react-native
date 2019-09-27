import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native';
import AppSwitchNavigator from '../nav/sidenav';

export default class SideNavDrawer extends Component {
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <View style={{flex:1}}>
           <Text>SideNavDrawer</Text> 
           <AppSwitchNavigator/>          
            </View>
            );
    }
}
{/* <Tabnav/> */}