import axios from 'axios';
var http ="https://react-native-app-node.herokuapp.com";
var tkn="";
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions } from 'react-navigation';
import { connect } from "react-redux";
// import {alogin,getusers,google} from '../reducers/index'

export const numchangeAction = (numbers) => {
    console.log(numbers,"**************")
    return {
        type:"multiply",
        payload:numbers
    }
}
export const  myloader = () =>{
    console.log("loader fun")
    new Promise((reslove,reject)=>{
        return (dispatch)=>{
            reslove(dispatch)
            console.log("in dispathch loaderfun");
                dispatch({
                    type:'currentloaderstate',
                    payload:true
                })       
        }
    })
    
  
    
}

export const bioRegister = (regdetails) =>{
    console.log(regdetails,"+++++++++++++++++++++++")
    return {
        type:'register',
        payload:regdetails
    }    
}


export const  alogin = (logindet) =>{

    // myloader();
// console.log(getState())
    var username = logindet.username;
    var password = logindet.password;
    console.log(logindet)
        try { 
           
            axios.post(http+'/login',logindet).then((res) =>{
                if(res){         
                    // if(username == res.data.username && password == res.data.password){
                        // console.log(res.data)
                    AsyncStorage.setItem('token',res.data['token'])
                    AsyncStorage.getItem('token').then((value) => {                        
                        if (value !== null) {
                            console.log("value", value);
                            tkn = value;
                                                  
                        }
                    });
                    // }                                            
                }
            }).catch((err)=>{
                console.log(err)
            })
         }
      catch (e) {
        alert(JSON.stringify(e))
      }
      finally {
        
      }
      return {
        type:'login',
        payload:logindet
    }   
};



export const  google = () =>{
    console.log("googlefungoogle")
    const headers = {
        "Content-Type": "application/json",
        "access-token": tkn
    }  

    // let api="https://react-native-app-node.herokuapp.com/api/allusers/"
    return async (dispatch)=>{
        console.log("in dispathch");
        
        axios.get(http+'/api/allusers/',{headers:headers}).then(res => {
            
            console.log(res.data,"@@@@@@@#@#@#############@#@#@#")
            dispatch({
                type:'alluser',
                payload:res.data
            })
        })
    } 
    
}


export const  deleteapi = (data) =>{
    console.log("googlefun")
    const headers = {
        "Content-Type": "application/json",
        "access-token": tkn
    }  

    // let api="https://react-native-app-node.herokuapp.com/api/allusers/"
    return async (dispatch)=>{
        console.log("in dispathch");
        
        return axios.delete(http+'/api/deluser/'+data,{headers:headers}).then(res => {
            
            console.log(res.data,"!@#$%^&*()")
            // google();
            return axios.get(http+'/api/allusers/',{headers:headers}).then(res => {
            
                console.log(res.data,"@@@@@@@#@#@#############@#@#@#")
                dispatch({
                    type:'alluser',
                    payload:res.data
                })
            })
            // dispatch({
            //     type:'alluser',
            //     payload:res.data
            // })
        })
    } 
    
}


export const  register = (data) =>{
    console.log("register")
    const headers = {
        "Content-Type": "application/json",
        "access-token": tkn
    }  

    return async (dispatch)=>{
        console.log("in dispathch at register");
        
        return axios.post(http+'/reg',data).then(res => {
            
            console.log(res.data,"register data res")
           
            return axios.get(http+'/api/allusers/',{headers:headers}).then(res => {
            
                console.log(res.data,"@@@@@@@#@#@#############@#@#@#")
                dispatch({
                    type:'alluser',
                    payload:res.data
                })
            })
        })
    } 
    
}


export const  updateapi = (data) =>{
    const headers = {
        "Content-Type": "application/json",
        "access-token": tkn
    }  

    return async (dispatch)=>{
        console.log("in dispathch at update user");
        
        return axios.put(http+'/api/updateuser',data,{headers:headers}).then(res => {
            
            console.log(res.data,"register data res")
           
            return axios.get(http+'/api/allusers/',{headers:headers}).then(res => {
            
                console.log(res.data,"@@@@@@@#@#@#############@#@#@#")
                dispatch({
                    type:'alluser',
                    payload:res.data
                })
            })
        })
    } 
    
}

export const  testupdate = (data) =>{
console.log(data,"test update function ")
    return async (dispatch)=>{
        console.log("in dispathch at testupdate ");
        
        
           
            // return axios.get(http+'/api/allusers/',{headers:headers}).then(res => {
            
            //     console.log(res.data,"@@@@@@@#@#@#############@#@#@#")
                dispatch({
                    type:'tempdata',
                    payload:data
                })
            // })
        // })
    } 
    
}

export const  testnav = (data) =>{
 console.log("udpate data ",data)
//  this.props.navigation.navigate("Dashboard")
//  this.props.navigation.navigate('Dashboard',{name:'Dashboard'}) 
//  return ;
    return  (dispatch)=>{
        NavigationActions.navigation.navigate('Dashboard')
    //     // this.props.navigation.navigate('Dashboard',{name:'Dashboard'})
        console.log("in dispatch")
    //             this.props.navigation.dispatch(
    //                 NavigationActions.navigate({routeName:'Dashboard'})       
                // )} 
                       }
}



const mapStateToProps = (state) => {
    const { num,bool }  = state.mathReducers;
    return { num,bool };
  }
  

export default connect(mapStateToProps);