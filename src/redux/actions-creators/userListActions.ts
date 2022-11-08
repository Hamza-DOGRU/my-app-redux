import { UserListAction } from "../actions/userList"
import {Dispatch} from 'redux'
import axios from 'axios'
import { userListType } from "../actions-types/userListType"
import { User } from "../models/user"

const API_URL='https://dummyjson.com/users'

export const getUserList = () => {
    try {
      return async (dispatch: Dispatch<UserListAction>) => {
        const res = await axios.get(API_URL)
        dispatch({
          type: userListType.GET_USER_REQUEST,
        })
        if (res.data)
          return dispatch({
            type: userListType.GET_USER_SUCCESS,
            payload: res.data.users,
          })
      }
    } catch (e) {
      return async (dispatch: Dispatch<UserListAction>) => {
        dispatch({
          type: userListType.GET_USER_FAIL,
          payload: (e as Error).message,
        })
      }
    }
  }

export const addUser=(user:User)=>{
    try{
     return async(dispatch:Dispatch<UserListAction>)=>{
        const response=await axios.post(`${API_URL}/${user.id}`,user)
        dispatch({
          type:userListType.POST_ADD_USER_REQUEST,
        })
        if(response.data)
          return dispatch({
            type:userListType.POST_ADD_USER_SUCCESS,
            payload:response.data.user
        })
     }
    }
    catch(e){
        return async (dispatch:Dispatch<UserListAction>)=>{
            dispatch({
                type:userListType.POST_ADD_USER_FAİL,
                payload:(e as Error).message
            })
        }
    }
}