import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import {google,testupdate} from '../actions/index'
import { List,Snackbar,Card,Paragraph} from 'react-native-paper';

class CurdView extends Component {
    constructor(props){
        super(props);
      
    }
    state ={
        resdata:'',
        snackbarbool:false
    }
    componentDidMount(){
        console.log("curd_view");   
            
    }
    componentWillReceiveProps(){
        // this.props.google();
    }
    fun(param){
        if(param !="" && param !=null)
        console.log(param)
        this.setState({resdata:param,snackbarbool:true})
        setTimeout(()=>{
            this.setState({snackbarbool:false})
        },5000)
      this.props.testupdate(param)     
      
    }
    render(){
        return(
            <View style={styles.container}>
             {/* <List.Item title="First Item"  description="Item description" left={props => <List.Icon {...props} icon="folder" />}/> */}
              <ScrollView>
                 {
                     Object.keys(this.props.allUsersave).map(a =>{
                       return <View  key={Object.values(this.props.allUsersave[a]['_id'])}>

                        {/* <List.Item title={Object.values(this.props.allUsersave[a]['username'])}
                          description={JSON.stringify(Object.values(this.props.allUsersave[a]))} 
                          left={props => <List.Icon {...props} icon='folder' />}
                        onPress={()=>{ this.fun(this.props.allUsersave[a])}}/> */}
                       {/* <Text style={styles.text}  onPress={()=>{ this.fun(Object.values(this.props.allUsersave[a]))}}>Hai {Object.values(this.props.allUsersave[a]['username'])}</Text>
                       <View style={styles.separator}/> */}
                       
                       <Card  onPress={()=>{ this.fun(this.props.allUsersave[a])}}>
                           <Card.Title title={Object.values(this.props.allUsersave[a]['username'])}/>
                       <Card.Content>
                                                      
                           <Paragraph style={styles.viewsep}>FirstName {Object.values(this.props.allUsersave[a]['firstname'])}</Paragraph>
                           <Paragraph style={styles.viewsep}>LastName {Object.values(this.props.allUsersave[a]['lastname'])}</Paragraph>
                           <Paragraph style={styles.viewsep}>UserName {Object.values(this.props.allUsersave[a]['username'])}</Paragraph>
                           <Paragraph style={styles.viewsep}>Password {Object.values(this.props.allUsersave[a]['password'])}</Paragraph>
                           <Paragraph style={styles.viewsep}>PhoneNumber {Object.values(this.props.allUsersave[a]['phonenumber'])}</Paragraph>                                                      
                       </Card.Content>
                       </Card>
                       </View>
                       
                     })
                 }
                 </ScrollView> 
                 <Snackbar visible={this.state.snackbarbool}>Your selected <Text style={{color:"red",fontSize:25,fontWeight:'bold'}}>{this.state.resdata['firstname']}</Text></Snackbar>
            </View>
            )
    }
}

const mapStateToProps = (state) => {
    const { allUsersave }  = state.mathReducers;
    return { allUsersave };
  }
  

export default connect(mapStateToProps, {testupdate,google})(CurdView);


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
      
    },
    viewsep:{
        fontSize:19,
        // fontWeight:'normal',
        margin:5

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
