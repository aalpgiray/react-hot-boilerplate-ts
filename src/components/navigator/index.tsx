import React, { Component } from "react"
import { Link } from "react-router"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { ILink } from "../.././routes"

export interface INavigator {
    routes: ILink[]
}

export default class Navigator extends React.Component<INavigator, {}>{
    calculateLinks() {
        return this.props.routes.map(r => <MenuItem key={r.path}><Link style={{textDecoration:"textDecorationNone"}} to={r.path}>{r.name}</Link></MenuItem >)
    }



    render() {
        return (
            <AppBar
                title="Title"
                iconElementLeft={
                    <IconMenu
                        iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                        {this.calculateLinks()}
                    </IconMenu>
                }>

            </AppBar>
        )
    }
}