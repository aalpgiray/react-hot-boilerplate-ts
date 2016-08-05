import React, { Component } from "react"
import { Router, browserHistory } from "react-router"
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from "react-redux"

import store from ".././store"
import App from "../App"

export interface ILink {
    path: string;
    name?: string;
}

interface IRoute extends ILink {
    getComponent(location: any, callback: any): void
}

export function errorLoading(err: any) {
    console.error('Dynamic page loading failed', err);
}

export function loadRoute(cb: any) {
    return (module: any) => {
        return cb(null, module.default);
    }
}


const routeMatcher: IRoute = {
    path: "/*",
    getComponent(location, cb) {
        let path = "";
        switch (location.location.pathname) {
            case "/":
                path = "/home"
                break;
            default:
                path = location.location.pathname
                break;
        }
        System.import(`.${path}/index`)
            .then(loadRoute(cb))
            .catch(errorLoading);
    }
}

const routes = {
    component: App,
    childRoutes: [
        routeMatcher,
    ]
}

export const links: ILink[] = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/about",
        name: "About"
    },
    {
        path:"/contact",
        name:"Contact"
    }
]

const history = syncHistoryWithStore(browserHistory, store);

export default class Routes extends Component<{}, {}>{
    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        )
    }
}