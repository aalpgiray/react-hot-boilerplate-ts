import React, { Component } from "react"
import { connect } from "react-redux"
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// @connect(state => {
//     return {
        
//     }
// })
export default class HomePage extends Component<{}, {}>{
    render() {
        return <h1>Home Page</h1>
    }
}