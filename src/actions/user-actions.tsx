import { Action } from 'redux';

export const
    setUserName = "SET_USER_NAME",
    setUserAge = "SET_USER_AGE";

export interface IUserAction extends Action {
    Name?: string;
    Age?: number;
}

export class UserActions {
    static setUserName(Name: string): IUserAction {
        return {
            type: setUserName,
            Name
        }
    }
    static setUserAge(Age: number): IUserAction {
        return {
            type: setUserAge,
            Age
        }
    }
}