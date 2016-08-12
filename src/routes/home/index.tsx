import React, { Component } from "react"
import { connect } from "react-redux"
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { IStore } from "store"

import { IUser } from "reducers/user-reducer/user-reducer"

interface IHome {
    dispatch?: any;
    user?: IUser;
}

@connect((state: IStore) => {
    const props = {
        user: state.user
    }
    return props;
})
export default class HomePage extends Component<IHome, {}>{
    render() {
        return (
            <div>
                <h3>Name: {this.props.user.get("name")}</h3>
                <h3>Age: {this.props.user.get("age")}</h3>
            </div>
        )
    }
}