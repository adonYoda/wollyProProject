interface User{
    login: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface State {
    user?: UserProfile;
    token?: string;
}
export type GetState = () => State;

export type Dispatch = (action: Action)=> void;
export interface Action{
    type: string;
    payload?:any;
}

export interface UserProfile extends User {

}

export interface UserRegister extends User {

}