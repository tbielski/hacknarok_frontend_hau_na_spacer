import {
    USERS_SUCCESS,
    ADD_USER,
    REMOVE_USER,
    EDIT_USER,
    USERS_ADD_DOG,
    USERS_ADD_POST,
} from "./types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case USERS_ADD_POST: {
            return {
                ...state,
                postsArray: [...state.postsArray, action.payload],
            };
        }
        case USERS_ADD_DOG: {
            return {
                ...state,
                dogsArray: [...state.dogsArray, action.payload],
            };
        }
        case USERS_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
}
