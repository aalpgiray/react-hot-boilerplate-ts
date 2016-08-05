import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import { IStore } from ".././store"


const storeData: IStore = {
  routing: routerReducer
}

export default combineReducers(storeData)
