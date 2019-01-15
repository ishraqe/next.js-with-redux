import { SIGNUP } from "../actions/types";

const INITIAL_STATE = {
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
