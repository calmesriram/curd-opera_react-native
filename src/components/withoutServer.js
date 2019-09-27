import React, {Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Button,TextInput } from 'react-native-paper';

export default class Withoutserver extends Component {
    constructor(props){
        super(props);
       
    }
    
    render(){
        return(
            <View style={styles.container}>
           <Text>Withoutserver</Text>          
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