import React from 'react';

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Test1 from '../components/test1'
import Test2 from '../components/test2'
import Screen1 from '../components/screen1'
import Screen2 from '../components/screen2'
import Screen3 from '../components/screen3'
// import SHOWUSER from '../components/ShowUsers'


const Tabnav = createBottomTabNavigator({
    page1:Screen1,
    page2:Screen2,
    page3:Screen3    
  },{
      initialRouteName:"page1"
  });

  export default createAppContainer(Tabnav);
// export const MyApp = createAppContainer(tabnav);


// const tabnav = createBottomTabNavigator({
//     page1:{
//         screen:Screen1
//     },
//     page2:{
//         screen:Screen2
//     },
//     page3:{
//         screen:Screen3
//     }
//   });
