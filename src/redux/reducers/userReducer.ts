import { userListType } from "../actions-types/userListType"
import { UserListAction } from "../actions/userList"
import { UserState } from "../models/user"

const initialState:UserState={//uygulama her zaman default bu state ile başlayacak
    data:[],
    loading:false,
    error:"",
}
 const GetUserList=(state:UserState=initialState,action:UserListAction)=>{
    switch (action.type){
        case userListType.GET_USER_REQUEST:
            return{
                loading:true,
                data:[],
            }
        case userListType.GET_USER_SUCCESS:
            return{state,data:action.payload,loading:false}

        case userListType.GET_USER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case userListType.POST_ADD_USER_REQUEST:
            return{
                loading:true,
                data:state.data,
            }
        case userListType.POST_ADD_USER_SUCCESS:
            return {state,data:action.payload,loading:false} //return Object.assign({},state,{user:[...state.data,action.payload]}) alternatif kod bloğu 

        case userListType.POST_ADD_USER_FAİL:
            return{
                loading:false,
                data:state.data
            }

        default:
            return state
    }
}
export default GetUserList

