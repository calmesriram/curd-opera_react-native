import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native';
import Tabnav from '../nav/bottomnav';

export default class BottomnavController extends Component {
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <View style={{flex:1}}>
           <Text>Showuser</Text>           
           <Tabnav/>
            </View>
            );
    }
}