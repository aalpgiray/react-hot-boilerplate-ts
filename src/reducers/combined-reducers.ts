import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import { IStore } from "store"
import userReducer from './user-reducer/user-reducer';

const storeData: IStore = {
  user: userReducer,
  routing: routerReducer
}

export default combineReducers(storeData)
