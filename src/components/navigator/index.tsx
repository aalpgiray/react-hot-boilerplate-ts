import React, { Component } from "react"
import { Link } from "react-router"

import { ILink } from "../.././routes"

interface INavigator {
    routes: ILink[]
}

export default class Navigator extends React.Component<INavigator, {}>{
    calculateLinks() {
        return this.props.routes.map(r => <Link to={r.path} key={r.path}>{r.name}</Link>)
    }
    render() {
        return (
            <div>
                {this.calculateLinks()}
            </div>
        )
    }
}