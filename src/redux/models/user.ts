export interface User{
    id:number
    firstName:string
    lastName:string
    maidenName:string
    age:number
    gender:string
    email:string
    phone:string
}

export interface UserState{
    data:User[]
    loading:boolean
    error:string
}
