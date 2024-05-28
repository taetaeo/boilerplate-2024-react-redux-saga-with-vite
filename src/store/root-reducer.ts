import { combineReducers } from "redux";

import TestReducer from "./test/reducer";

const rootReducer = combineReducers({ TestReducer });

export default rootReducer;
