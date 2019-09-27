import React, {Component} from 'react';
import {View,Text,ActivityIndicator,StyleSheet} from 'react-native';
import { connect } from "react-redux";
import {alogin,getusers,google,testnav,testdummy} from '../actions/index'
import { Button,TextInput } from 'react-native-paper';

class COMPONENTLOGIN extends Component {
    constructor(props){
        super(props);          
    }
        state = {
            username:'sriram',
            password:'sriram123$'
        }   
    
    authlogin(){
       
        this.props.alogin(this.state)  
      

        setTimeout(()=>{
            this.props.navigation.navigate('Dashboard',{name:'mydashboard'})
            this.props.google();
          
        },10000)
        
    }


    temp(){
        console.log("clicked")
        this.props.testdummy()
    }
    withoutserver(){
        console.log("clicked")
        this.props.testnav('1')
        // this.props.navigation.navigate('Withoutserver',{name:'Withoutserver'})        
    }

    render(){
        return(
            <View>
            <View style = {styles.container}>              
            <TextInput  style = {styles.input} mode='outlined' value={this.state.username}  onChangeText={(username)=>{this.setState({username:username})}} label="Enter the username"/>
            <TextInput   style = {styles.input} mode='outlined' value={this.state.password} onChangeText={(password)=>{this.setState({password:password})}}  label="Enter the password"/>    
            <Button style = {styles.input} mode="contained" title="Login" onPress={()=>{this.authlogin()}}>Login</Button>
            <Button style = {styles.input} mode="outlined"  onPress={this.withoutserver.bind(this)}>Withoutserver</Button>
            {/* <Button style = {styles.input} mode="contained" title="Login" onPress={his.temp.bind(this)}>Login</Button> */}
            </View>   
            <View>
            <ActivityIndicator size="large" color="red"  animating={this.props.bool} />
            </View>
        </View>
        )
    }
}



const mapStateToProps = (state) => {
    const { num,bool }  = state.mathReducers;
    return { num,bool };
  }
  

export default connect(mapStateToProps, {alogin,testnav,getusers,google,testdummy})(COMPONENTLOGIN);

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
    //    height: 42,
    //    borderColor: '#7a42f4',
    //    borderWidth: 1,
       fontSize:20,
       
    },
    submitButton: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButtonText:{
       color: 'white'
    }
 })


//  <TextInput style = {styles.input} placeholderTextColor = "#9a73ef" underlineColorAndroid = "transparent" value={this.state.username}  onChangeText={(username)=>{this.setState({username:username})}} placeholder="Enter the username"/>
//             <TextInput style = {styles.input} placeholderTextColor = "#9a73ef" underlineColorAndroid = "transparent" value={this.state.password} onChangeText={(password)=>{this.setState({password:password})}}  placeholder="Enter the password"/>    
//             {/* <Button style = {styles.submitButton} title="Login" onPress={()=>{this.authlogin()}}></Button>           */}