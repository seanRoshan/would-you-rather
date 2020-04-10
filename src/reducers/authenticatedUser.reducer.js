import {AUTHENTICATED_USER_ACTION_TYPES} from "../actions/authenticatedUser.action";

export default function authenticatedUser(state = null, action) {
    switch (action.type) {
        case AUTHENTICATED_USER_ACTION_TYPES.SET_AUTHENTICATED_USER: {
            return action.authenticatedUser
        }
        default: {
            return state;
        }


    }

}
