import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
export default combineReducers({
  auth: AuthReducer
});
