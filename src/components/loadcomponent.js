import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native';
import AppSwitchNavigator from '../nav/sidenav'
export default class Loadscreen extends Component {
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <View style={styles.container}>
           <Text>Loadscreen</Text>          
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});