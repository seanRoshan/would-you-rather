import {hideLoading, showLoading} from "react-redux-loading-bar";
import {GameService} from "../services";

export const AUTHENTICATED_USER_ACTION_TYPES = {
    SET_AUTHENTICATED_USER: "SET_AUTHENTICATED_USER"
};


export function setAuthenticatedUser(authenticatedUser) {
    return {
        type: AUTHENTICATED_USER_ACTION_TYPES.SET_AUTHENTICATED_USER,
        authenticatedUser
    }
}

export function handleSetAuthenticatedUser(authenticatedUser) {
    return (dispatch) => {
        dispatch(showLoading());
        GameService.signIn(authenticatedUser)
            .then(() => {
                dispatch(setAuthenticatedUser(authenticatedUser));
            }).catch((error) => {
            alert(error);
        })
            .finally(() => {
                dispatch(hideLoading());
            })
    };
}
