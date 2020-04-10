import {hideLoading, showLoading} from "react-redux-loading-bar";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        setTimeout(() => {
            dispatch(hideLoading());
        }, 500);
    }
}
