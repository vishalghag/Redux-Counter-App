import {combineReducers} from '@reduxjs/toolkit'
import { counterReducer } from './counter'

export const reducer = combineReducers({
    counterReducer,
})