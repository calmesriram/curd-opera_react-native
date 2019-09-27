import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import MyHeader from "./MyHeader"

const Test1 = props =>{
    return(
        <View>
            <MyHeader navigation={props.navigation} title="test1"/>
       <Text>Test1</Text>
        </View>
        )
}

export default Test1