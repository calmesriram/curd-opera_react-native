import React, {Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { connect } from "react-redux";
import {alogin,getusers,register} from '../actions/index'
import { Button,TextInput } from 'react-native-paper';

class CurdAdd extends Component {
    constructor(props){
        super(props);
       
    }
    state ={
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        phonenumber:''
    }
    reg(){
       this.props.register(this.state)
       this.state=''
    }
    render(){
        return(
            <View style={styles.container}>
             <TextInput   style = {styles.input} mode='outlined' label="Enter the firstname" value={this.state.firstname} onChangeText={(firstname)=>{this.setState({firstname:firstname})}} />
             <TextInput   style = {styles.input} mode='outlined' label="Enter the lastname" value={this.state.lastname} onChangeText={(lastname)=>{this.setState({lastname:lastname})}} /> 
             <TextInput   style = {styles.input} mode='outlined' label="Enter the username" value={this.state.username} onChangeText={(username)=>{this.setState({username:username})}} />     
             <TextInput   style = {styles.input} mode='outlined' label="Enter the password"value={this.state.password}  onChangeText={(password)=>{this.setState({password:password})}} />     
             <TextInput   style = {styles.input} mode='outlined' label="Enter the phonenumber" value={this.state.phonenumber} onChangeText={(phonenumber)=>{this.setState({phonenumber:phonenumber})}} /> 
             <Button style = {styles.input} mode="contained" title="Register" onPress={()=>{this.reg()}}>Register</Button>   
             </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
        margin:2,
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


const mapStateToProps = (state) => {
    const { num,bool }  = state.mathReducers;
    return { num,bool };
  }
  

export default connect(mapStateToProps, {alogin,getusers,register})(CurdAdd);