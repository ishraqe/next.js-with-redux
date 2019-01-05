import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/index";

export default (initStore = (initalState = {}) => {
  return createStore(reducers, initalState, applyMiddleware(thunkMiddleware));
});
