import React, {Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { connect } from "react-redux";
import {updateData,updateapi} from '../actions/index'
import { Button,TextInput } from 'react-native-paper';

class CurdUpdate extends Component {
    constructor(props){
        super(props);
        
          this.state ={
            firstname:'',
              lastname:'',
              username:'',
              password:'',
              phonenumber:''
          }
       }
  
  
    componentWillReceiveProps(){
        this.setState({firstname:this.props.updateData['firstname']})
        this.setState({lastname:this.props.updateData['lastname']})
        this.setState({username:this.props.updateData['username']})
        this.setState({password:this.props.updateData['password']})
        this.setState({phonenumber:this.props.updateData['phonenumber']})
    }
 update(){
   this.props.updateapi(this.state)
 }
    render(){
           return(
            <View style={styles.container}>
            <TextInput   style = {styles.input} mode='outlined' label="Enter the firstname" value={this.state.firstname} onChangeText={(firstname)=>{this.setState({firstname:firstname})}} />
            <TextInput   style = {styles.input} mode='outlined' label="Enter the lastname" value={this.state.lastname} onChangeText={(lastname)=>{this.setState({lastname:lastname})}} /> 
            <TextInput   style = {styles.input} mode='outlined'  label="Enter the username" value={this.state.username} onChangeText={(username)=>{this.setState({username:username})}} editable={false}/>     
            <TextInput   style = {styles.input} mode='outlined' label="Enter the password"value={this.state.password}  onChangeText={(password)=>{this.setState({password:password})}} />     
            <TextInput   style = {styles.input} mode='outlined' label="Enter the phonenumber" value={this.state.phonenumber} onChangeText={(phonenumber)=>{this.setState({phonenumber:phonenumber})}} /> 
            <Button style = {styles.input} mode="contained" title="Update" onPress={()=>{this.update()}}>Update</Button>   
            </View>
            )
    }
}


const mapStateToProps = (state) => {
    const { updateData }  = state.mathReducers;
    return { updateData };
  }
  

export default connect(mapStateToProps, {updateapi,updateData})(CurdUpdate);   


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



 {/* <Text>hai{this.props.updateData || "asl;dkfj"}</Text>
            <Text>hai{this.props.updateData[2] || "asl;dkfj"}</Text> */}
            // <Text>hai{this.props.updateData || "asl;dkfj"}</Text>
//     Object.keys(this.props.updateData).map(a =>{
//         <Text>{a}</Text>
//    // <TextInput style={styles.textbox}  value={Object.values(this.props.allUsersave[a]['username'])}  onChangeText={(firstname)=>{this.setState({firstname:firstname})}} placeholder="Enter the firstname"/>
//    // <TextInput style={styles.textbox}  value={Object.values(this.props.allUsersave[a]['username'])}  onChangeText={(firstname)=>{this.setState({firstname:firstname})}} placeholder="Enter the firstname"/>
//    // <TextInput value={Object.values(this.props.allUsersave[a]['lastname'])}  onChangeText={(lastname)=>{this.setState({lastname:lastname})}} placeholder="Enter the lastname"/>
//    // <TextInput value={Object.values(this.props.allUsersave[a]['username'])}  onChangeText={(username)=>{this.setState({username:username})}} placeholder="Enter the username"/>
//    // <TextInput value={Object.values(this.props.allUsersave[a]['password'])}  onChangeText={(password)=>{this.setState({password:password})}} placeholder="Enter the password"/>
//    // <TextInput value={Object.values(this.props.allUsersave[a]['phonenumber'])}  onChangeText={(phonenumber)=>{this.setState({phonenumber:phonenumber})}} placeholder="Enter the phonenumber"/>
//     })  
//    }
//    {/* <Button title="Update" onPress={()=>{this.update()}}></Button>                */}
