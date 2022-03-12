import { combineReducers, createStore } from "redux";

import LoginModalReducer from "../Reducer/LoginModalReducers";
import ResortReducer from "../Reducer/ResortReducer";

const reducers = combineReducers({
  loginModalReducer: LoginModalReducer,
  ResortReducer: ResortReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
