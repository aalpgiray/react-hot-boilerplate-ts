import React, { Component } from 'react'
import { Link } from 'react-router'

import { ILink } from 'routes'

import {
    activeLinkStyle,
    liStyles,
    ulStyles
} from "./style"

export interface INavigator {
    routes: ILink[]
}

export default class Navigator extends Component<INavigator, {}>{
    calculateLinks() {
        return this.props.routes.map(r => (
            <AppLink path={r.path} key={r.path} name={r.name} />
        ))
    }
    render() {
        return (
            <ul style={ulStyles}>
                {this.calculateLinks()}
            </ul>
        )
    }
}

class AppLink extends Component<ILink, {}>{
    render() {
        return (
            <li style={liStyles}>
                <Link to={this.props.path} activeStyle={activeLinkStyle}>
                    {this.props.name}
                </Link>
            </li>
        )
    }
}