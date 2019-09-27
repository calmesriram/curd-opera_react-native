/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import COMPONENTLOGIN from './src/components/CompoLogin'
import BottomnavController from './src/components/BottomnavController'
import TopnavController from './src/components/TopnavController'
import SideNavDrawer from './src/components/SidenavDrawer'
import WelcomeScreen from './src/components/Welcomescreen'
import Loadscreen from './src/components/loadcomponent'
import AppSwitchNavigator from './src/nav/sidenav'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import  reducers from "./src/reducers";
import {Rootstack} from './src/nav/appRouting'
import {MyApp} from './src/nav/bottomnav'
import thunk from "redux-thunk";
import Test1 from './src/components/test1';
import Authguard from './src/components/auth_guard';

const App = () => {
  return (
    // <Provider store={createStore(reducers,applyMiddleware(ReduxThunk))}>
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
    <View style={{flex:1}}>
    {/* <AppSwitchNavigator/> */}
    {/* <Authguard /> */}
    <Rootstack/>
    </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
