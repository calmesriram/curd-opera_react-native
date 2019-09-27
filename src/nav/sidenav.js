import React from 'react';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
// import {createDrawerNavigator} from 'react-navigation-tabs'

import WelcomeScreen from '../components/Welcomescreen'
import DashboardScreen from '../components/Dashboardscreen'
import SideNavDrawer from '../components/SidenavDrawer'
import Icon from 'react-native-vector-icons/Ionicons';  


const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: DashboardScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  
  
const WelcomeStackNavigator = createStackNavigator(  
    {  
        WelcomeNavigator: WelcomeScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  
const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: {  
        screen: DashboardStackNavigator  
    },  
    Welcome: {  
        screen: WelcomeStackNavigator  
    },  
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Dashboard: { screen: AppDrawerNavigator },  
    Welcome: { screen: WelcomeScreen },  
  
});  
  
export default createAppContainer(AppSwitchNavigator);  
  