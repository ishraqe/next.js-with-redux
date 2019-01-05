import { TEST } from "./types";

export const testRedux = () => dispatch => {
  dispatch({ type: TEST, val: "Hello Im, Redux store" });
};
