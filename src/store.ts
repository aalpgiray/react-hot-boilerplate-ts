import { applyMiddleware, createStore, ReducersMapObject, compose } from "redux"
import promise from "redux-promise-middleware"
import { logger } from "logger"

import reducers from "combined-reducers"

export interface IStore extends ReducersMapObject {
    user
}

interface IWindow extends Window {
    devToolsExtension: any
}

declare var window: IWindow;

const middleware = applyMiddleware(promise());

export default createStore(reducers, compose(middleware, window.devToolsExtension && window.devToolsExtension()));