import thunk from "redux-thunk";
import logger from "./logger.middleware";
import {applyMiddleware} from "redux";

export default applyMiddleware(
    thunk,
    logger
);
