import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native';

export default class Screen3 extends Component {
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <View style={styles.container}>
           <Text>Screen3</Text>          
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