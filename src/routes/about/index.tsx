import React, { Component } from "react"
import { connect } from "react-redux"
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default class AboutPage extends Component<{}, {}>{
    render() {
        return <h1>About Page</h1>
    }
}