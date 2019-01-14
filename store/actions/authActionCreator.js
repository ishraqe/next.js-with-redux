import { SIGNUP } from "./types";

import AuthService from "../../auth/authService";

const Auth = new AuthService();

export const createUser = userInfo => dispatch => {
  console.log(userInfo);
  //   const token = Auth.createUser();
  //   if (token) {
  //     document.cookie = `id_token=${token}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
  //     dispatch({ type: SIGNUP, token });
  //   }
};
