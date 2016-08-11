import React, { Component } from "react"
import { Link } from "react-router"

import { ILink } from "../.././routes"

export interface INavigator {
    routes: ILink[]
}

export default class Navigator extends React.Component<INavigator, {}>{
    calculateLinks() {
        return this.props.routes.map(r => <li key={r.path}><Link to={r.path}>{r.name}</Link></li>)
    }

    render() {
        return (
            <ul>
                {this.calculateLinks()}
            </ul>
        )
    }
}