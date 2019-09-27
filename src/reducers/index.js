import { combineReducers } from 'redux';

const initialState = {
    num:2,
    fullname:"appasamy",     
    fathername:"father",
    username:'',
    password:'',
    allUsersave:'',
    isloggedIn:'false',
    mytest:'test',
    updateData:' reduces',
    responseData:'not_yet_received_:_-',
    bool:false,
    
    
}

const mathReducers = ( state=initialState, action )=>{

    switch(action.type){
    
        case "addition":
            return { ...state, num:3+action.payload};
    
        case "multiply":
            return { ...state, num: 3*action.payload};

        case "register":
            return { ...state, ...action.payload};

        case "currentloaderstate":
        console.log(action.payload," reducers from loader")
            return { ...state, bool:action.payload};    
        
        case "login":
            return { ...state, isloggedIn:action.payload};
        
        case "alluser":
        if(action.payload !="" && action.payload !=null)
        console.log("ASDFSDFASDFASDFASDF",action.payload)        
        return { ...state, allUsersave:action.payload,bool:false};
         
        case "tempdata":             
        return { ...state, updateData:action.payload};

        case "resData": 
        console.log( responseData,"*****************in reduswer********") 
        return {...state, responseData:action.payload};        
          
       default:
            return state;
    }
}

export default combineReducers({
    mathReducers:mathReducers
})