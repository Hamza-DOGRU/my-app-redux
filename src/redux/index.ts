import { combineReducers } from "redux";
//import { UserState } from "./models/user";
import GetUserList from "./reducers/userReducer";


// interface AppSatate{
//     user:UserState//uygulamanın state type girdim bunu type safe bir şekilde uygulama key oluşturmak için yaptım
// }


const  rootReducer=combineReducers({
    user:GetUserList//global state içinde tutulacak verilerin keylerini reducer fonksiyonlarına eşitliyorum
})

export default rootReducer
export type RootState=ReturnType<typeof rootReducer>