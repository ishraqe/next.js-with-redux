import { TEST } from "../actions/types";

const INITIAL_STATE = {
  test: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, test: action.val };
    default:
      return state;
  }
};
