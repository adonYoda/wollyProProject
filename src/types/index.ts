interface User{
    login: string;
    firstName: string;
    lastName: string;
    mail: string;
    phone: string;
}



export type Dispatch = (action: Action)=> void;
export interface Action{
    type: string;
    payload?:any;
}

export interface UserProfile{

}