import { Record } from 'immutable';

import { NavigableObject, NavigatableRecordFactory } from 'navigatable-Record';

import {
    setUserAge,
    setUserName,
    IUserAction
} from 'actions/user-actions';

interface IUSER {
    Name: string;
    Age: number;
}

export class USER extends NavigatableRecordFactory<IUSER>({
    Name: "Simy the bothless",
    Age: 27,
})<USER> implements IUSER {
    Name: string;
    Age: number;
}

export default (state = new USER(), action: IUserAction) => {
    switch (action.type) {
        case setUserName: {
            return state.SetValue(t => t.To(q => q.Name), action.Name)
        }
        case setUserAge: {
            return state.SetValue(t => t.To(q => q.Age), action.Age)
        }
        default:
            return state;
    }
}