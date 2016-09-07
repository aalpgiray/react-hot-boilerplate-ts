import React, { Component } from "react"
import { connect } from "react-redux"
import { IStore } from "store"

import { USER } from "user-reducer"
import { UserActions } from "user-actions"

interface IHome {
    dispatch?: any;
    user: USER;
}

@connect((state: IStore): IHome => {
    return {
        user: state.user
    }
})
export default class HomePage extends Component<IHome, {}>{
    changeName() {
        this.props.dispatch(UserActions.setUserName("Aykut Alpgiray Ateş"));
    }
    render() {
        return (
            <div>
                <h3>Name: {this.props.user.Name}</h3>
                <h3>Age: {this.props.user.Age}</h3>
                <button onClick={() => {
                    this.changeName();
                } }> Adı değiştir </button>
            </div>
        )
    }
}