import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,Button} from 'react-native';

export default class DashboardScreen extends Component {  
    static navigationOptions = {  
         title: 'Dashboard',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>DashboardScreen</Text>  
                {/* <Button  
                    title="Go to DashboardScreen"  
                    onPress={() => this.props.navigation.navigate('Dashboard')}  
                />   */}
            </View>  
        );  
    }  
}  