import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button,ScrollView} from 'react-native';
// import AppSwitchNavigator from '../nav/sidenav'

export default class WelcomeScreen extends Component {  
    static navigationOptions = {  
         title: 'Welcome',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>WelcomeScreen1</Text>  
{/*            
                <Button  
                    title="Go to DashboardScreen"  
                    onPress={() => this.props.navigation.navigate('Dashboard')}  
                />   */}
            </View>  
        );  
    }  
}  