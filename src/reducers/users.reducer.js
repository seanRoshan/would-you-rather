import {USERS_ACTION_TYPES} from "../actions/users.actions";

export default function users(state = {}, action) {
    switch (action.type) {
        case USERS_ACTION_TYPES.RECEIVE_USERS: {
            return {
                ...state,
                ...action.users
            }
        }
        default: {
            return state;
        }
    }
}
