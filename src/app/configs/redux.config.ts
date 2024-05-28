import createSagaMiddleware from "redux-saga";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "@/store";

const middleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(middleware));

const reduxConfigs = {
  middleware,
  store,
};
export default reduxConfigs;
