import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import COMPONENTLOGIN from '../components/CompoLogin'
import COMPONENTDASHBOARD from '../components/Dashboard'
import   TopnavController from '../components/TopnavController'
import Withoutserver from '../components/withoutServer'

import SHOWUSER from '../components/BottomnavController'


const AppNavigator = createStackNavigator({
        Login: COMPONENTLOGIN,
        Dashboard:{screen:TopnavController,title:'Dashboard'},
        Showuser:{screen:SHOWUSER,title:'Showuser'},
        Withoutserver:{screen:Withoutserver}
    }, {
        // initialRouteName :"Login"      
    headerMode: 'none',
});
export const Rootstack = createAppContainer(AppNavigator)



// // https://www.reactnativeschool.com/complex-navigation-example-with-react-navigation

// export default createStackNavigator({
//     Login: COMPONENTLOGIN,
//     Dashboard:COMPONENTDASHBOARD,
// }, {
//   initialRouteName: 'Login',
// });
// headerLeft: null

// headerMode: 'none',
//     navigationOptions: {
//       gesturesEnabled: false
//     }