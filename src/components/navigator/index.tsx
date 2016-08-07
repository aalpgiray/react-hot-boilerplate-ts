import React, { Component } from "react"
import { Link } from "react-router"

import { ILink } from "../.././routes"

interface INavigator {
    routes: ILink[]
}

export default class Navigator extends React.Component<INavigator, {}>{
    calculateLinks() {
        return this.props.routes.map(r => <li><Link to={r.path} key={r.path}>{r.name}</Link></li>)
    }
    render() {
        return (
            <ul>
                {this.calculateLinks()}
            </ul>
        )
    }
}