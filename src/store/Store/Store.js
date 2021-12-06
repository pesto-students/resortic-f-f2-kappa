import { combineReducers, createStore } from "redux";

import LoginModalReducer from "../Reducer/LoginModalReducers";

const reducers = combineReducers({
  loginModalReducer: LoginModalReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
