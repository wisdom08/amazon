import {combineReducers} from "redux";
import basketReducer from "./basket/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    basket: basketReducer,
    user: userReducer,
});

export default rootReducer;
