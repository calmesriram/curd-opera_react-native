import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native';
import ToptabNav from '../nav/topnav';

export default class TopnavController extends Component {
    static navigationOptions = {  
        title: 'Top Nav',  
   };  
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <View style={{flex:1}}>                 
           <ToptabNav/>
            </View>
            );
    }
}
{/* <Tabnav/> */}