import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';


class Test extends Component {
    constructor(props){
        super(props);
      
    }
    state ={
        resdata:''
    }
   
    render(){
        return(
            <View style={styles.container}>
             {/* <List.Item title="First Item"  description="Item description" left={props => <List.Icon {...props} icon="folder" />}/> */}
              <ScrollView>
                 {
                     Object.keys(this.props.allUsersave).map(a =>{
                       return <View  key={Object.values(this.props.allUsersave[a]['_id'])}>

                        <List.Item title={Object.values(this.props.allUsersave[a]['username'])}
                          description={JSON.stringify(Object.values(this.props.allUsersave[a]))} 
                          left={props => <List.Icon {...props} icon='folder' />}
                        onPress={()=>{ this.fun(Object.values(this.props.allUsersave[a]['username']))}}/>
                       {/* <Text style={styles.text}  onPress={()=>{ this.fun(Object.values(this.props.allUsersave[a]))}}>Hai {Object.values(this.props.allUsersave[a]['username'])}</Text>
                       <View style={styles.separator}/> */}
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
  

export default connect(mapStateToProps, {testupdate,google})(CurdView);


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
