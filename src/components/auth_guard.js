import React, {Component} from 'react';
import {View,Text,TextInput,Button,StyleSheet,ScrollView} from 'react-native';
import {Rootstack} from '../nav/appRouting'
import AsyncStorage from '@react-native-community/async-storage';
export default class Authguard extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        _isloggedInorNot = async () => {
            const userToken = await AsyncStorage.getItem('token');   
            console.log(userToken,"auth")     
            this.props.navigation.navigate(userToken ? 'Dashboard' : 'Login');
          };
          _isloggedInorNot();
    }

    render(){
        return(
            <View style={styles.container}>
                if(userToken !="" && userToken !=null) {
                    this.props.navigate.navigation('Dashboard')
                }
            
          
                            <Text>Ram</Text>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',        
        opacity:0.8
    },
    textbox:{
        borderColor:"black"
    }
});

