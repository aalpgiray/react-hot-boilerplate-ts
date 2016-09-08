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
    shouldComponentUpdate(nextState: IStore) {
        return this.props.user != nextState.user;
    }
    changeName(_name: string) {
        this.props.dispatch(UserActions.setUserName(_name));
    }
    changeAge(_age: number) {
        this.props.dispatch(UserActions.setUserAge(_age));
    }
    render() {
        return (
            <div>
                <h3>Name: {this.props.user.Name} </h3>
                <h3>Age: {this.props.user.Age} </h3>
                <input type="text" value={this.props.user.Name} onChange={(_e: { target: HTMLInputElement }) => {
                    this.changeName(_e.target.value);
                } } />
                <input type="number" value={this.props.user.Age} onChange={(_e: { target: HTMLInputElement }) => {
                    this.changeAge(parseInt(_e.target.value));
                } } />
            </div>
        )
    }
}