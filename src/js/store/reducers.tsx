import { combineReducers } from "redux";
import { headerReducer } from "./Header/reducers";

export default combineReducers({
    header: headerReducer
});

