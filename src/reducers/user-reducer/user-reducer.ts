import { ReducersMapObject, Action } from 'redux';
import { Map, } from 'immutable';

export interface IUser extends Map<string, any> {
    get(key: "name"): string;
    set(key: "name", value: string): IUser;
    get(key: "age"): number;
    set(key: "age", value: number): IUser;
}

export const
    setUserName = "SET_USER_NAME",
    setUserAge = "SET_USER_AGE";

const UserDefaults: IUser = Map<string, any>({
    name: "Alp",
    age: 0
})

export default (state = UserDefaults, action: any) => {
    switch (action.type) {
        case setUserName:
            return state.set("name", action.name);
        case setUserAge:
            return state.set("age", action.age);
        default:
            return state;
    }
}