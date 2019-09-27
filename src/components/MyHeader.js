import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native';
import {MyApp} from '../nav/bottomnav'
import {Header} from "react-native-elements";
import HamburgerMenu from "./HamburgerMenu";
const MyHeader = props =>{
    return(
        <Header leftComponent={<HamburgerMenu navigation={props.navigation}/>} 
        centerComponent={{
            text:props.title,
            style:{color:"#fff",fontWeight:"bold"}
        }}
        statusBarProps={{barStyle:"light-content"}}
        />
    );
};

export default MyHeader;