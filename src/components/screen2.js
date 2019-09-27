import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,Button} from 'react-native';

export default class Screen2 extends Component {
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <View style={styles.container}>
           <Text>Screen2</Text>   
           <Button title="move page" onPress={()=> this.props.navigation.navigate('page3')}/>       
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