import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import MyHeader from "./MyHeader"

const Test2 = props =>{
    return(
        <View>
            <MyHeader navigation={props.navigation} title="test2"/>
       <Text>Test2</Text>
        </View>
        )
}

export default Test2