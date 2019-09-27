import React from "react";
import {Icon} from "react-native-elements"

const HamburgerMenu = props =>{
    return (
 <Icon color="#fff" name="menu" onPress={()=> props.navigation.navigate('DrawerOpen')} />
    );
};

export default HamburgerMenu;