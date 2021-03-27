import { USERS_SUCCESS, ADD_USER, REMOVE_USER, EDIT_USER } from "./types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
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
