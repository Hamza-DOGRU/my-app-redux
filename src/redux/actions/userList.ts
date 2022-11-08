import { userListType } from "../actions-types/userListType";
import { User } from "../models/user";

interface GetUserList{
    type:userListType.GET_USER_REQUEST
}
interface GetUserListSuccess{
    type:userListType.GET_USER_SUCCESS
    payload:User
}
interface GetUserListFail{
    type:userListType.GET_USER_FAIL
    payload:string
}
interface PostAddUser{
    type:userListType.POST_ADD_USER_REQUEST
}
interface PostAddUserSuccess{
    type:userListType.POST_ADD_USER_SUCCESS
    payload:User
}
interface PostAddUserFail{
    type:userListType.POST_ADD_USER_FAİL
    payload:string
}

export type UserListAction = GetUserList | GetUserListSuccess | GetUserListFail | PostAddUser | PostAddUserSuccess | PostAddUserFail

