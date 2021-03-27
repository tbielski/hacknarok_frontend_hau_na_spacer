import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { createMiddleware } from "redux-api-middleware";

import user from "./users/usersReducer";
import posts from "./posts/postsReducer";

const rootReducer = combineReducers({ user, posts });

const initalState = {};

const middleware = [thunk, createMiddleware(), logger];

const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
