import {
    USERS_SUCCESS,
    USERS_EDIT_DESC,
    USERS_ADD_DOG,
    DOG_EDIT,
    DELETE_DOG
} from "./types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
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

        case USERS_EDIT_DESC: {
            return action.payload
        }

        case DOG_EDIT: {
            return {
                ...state,
                dogsArray: state.dogsArray.map(d => d._id === action.payload._id ? action.payload : d)
            }
        }

        case DELETE_DOG:
            return {
                ...state,
                dogsArray: state.dogsArray.filter(d => d._id !== action.payload)
            }

        default:
            return state;
    }
}
