import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import {alogin,getusers,google,deleteapi} from '../actions/index'
import { List,Snackbar,Card,Paragraph} from 'react-native-paper';


class CurdDelete extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    fun(param){
        console.log(param,"from delete")
        // console.log(param[3])        
        this.props.deleteapi(param)
    }
    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
                 {
                     Object.keys(this.props.allUsersave).map(a =>{
                       return <View  key={Object.values(this.props.allUsersave[a]['_id'])}>

                        <List.Item title={Object.values(this.props.allUsersave[a]['username'])}
                          description={JSON.stringify(Object.values(this.props.allUsersave[a]))} 
                          left={props => <List.Icon {...props} icon='folder' />}
                        onPress={()=>{ this.fun(this.props.allUsersave[a]['username'])}}/>
{/* 
                        <Text style={styles.text}  onPress={()=>{ this.fun(Object.values(this.props.allUsersave[a]))}}>
                        Hai {Object.values(this.props.allUsersave[a]['username'])}
                        </Text> */}
                       {/* <View style={styles.separator}/>  */}
                         {/* <TouchableOpacity onPress={this.props.navigation.openDrawer}></TouchableOpacity>
                       <Text style={styles.text} onPress={()=>{ this.fun(Object.values(this.props.allUsersave[a]))}}>Hai {Object.values(this.props.allUsersave[a]['username'])}</Text> */}
                       
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
  

export default connect(mapStateToProps, {alogin,getusers,google,deleteapi})(CurdDelete);


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
