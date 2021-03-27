import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { combineReducers } from 'redux';
import { createMiddleware } from 'redux-api-middleware';

import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({ usersReducer })

const initalState = {

}

const middleware = [thunk, createMiddleware(), logger]

const store = createStore(rootReducer, initalState, applyMiddleware(...middleware))

export default store;