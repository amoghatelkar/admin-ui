import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./usersTypes"

const intialState = {

    loading : true,
    data : [],
    error : ''
 }

 const userReducer = (state = intialState , action : {type?:string,payload?:any}) => {

    switch(action.type) {

        case FETCH_USERS_REQUEST : 

            return {...state, loading : true,error:''}
        
        case FETCH_USERS_SUCCESS : 

            return {...state, data : action.payload ,loading:false ,error:''}

        case FETCH_USERS_FAILURE : 

            return {...state,data:[], error:action.payload,loading:false}

        default :
            return state
    }
 }

 export default userReducer