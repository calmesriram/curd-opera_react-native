import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import {alogin,getusers,google} from '../actions/index'
import {Card} from 'react-native-shadow-cards'
class COMPONENTDASHBOARD extends Component {
    constructor(props){
        super(props);
       
    }
    fun(a){
        alert(JSON.stringify(a))
    }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.props.google();
        //     // this.props.navigation.navigate('Dashboard',{name:'mydashboard'})
        // },5000)
    }
    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
                {
                    Object.keys(this.props.allUsersave).map(a =>{
                      return <View  key={Object.values(this.props.allUsersave[a]['_id'])}>
                        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
           <Text>Open Drawer</Text>
         </TouchableOpacity>
                      <Text style={styles.text} onPress={()=>{ this.fun(Object.values(this.props.allUsersave[a]))}}>Hai {Object.values(this.props.allUsersave[a]['username'])}</Text>
                      <View style={styles.separator}/>
                      </View>
                    })
                }
                </ScrollView>  
            </View>
            )
    }
}

const mapStateToProps = (state) => {
    const { allUsersave }  = state.mathReducers;
    return { allUsersave };
  }
  

export default connect(mapStateToProps, {alogin,getusers,google})(COMPONENTDASHBOARD);


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
    },
    separator:{
        height:1,
        backgroundColor:'#707080',
        width:'100%',

    
    },
    text:{
        fontSize:16,
        color:'#606070',
        padding:10
    }
})


{/* <View>
<Text >{Object.keys(this.props.allUsersave) +"no data"}hai</Text>
 </View>    */}

//  <View>
//  <Text >{this.props.allUsersave +"no data"}hai</Text>
//  </View>