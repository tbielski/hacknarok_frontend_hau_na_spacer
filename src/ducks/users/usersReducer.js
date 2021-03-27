import { USERS_SUCCESS, ADD_USER, REMOVE_USER, EDIT_USER} from './types';

const initialState = {
    user: {}
}

export default function(state = initialState, action){

    switch(action.type){

        case USERS_SUCCESS: {
            return {
                ...state,
                user: action.payload,
            }
        }

        default: return state
    }

}