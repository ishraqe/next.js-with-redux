import { SIGNUP } from "./types";
import axios from "axios";
import Router from "next/router";

export const createUser = userInfo => dispatch => {
  console.log(SIGNUP);
  axios
    .post("http://localhost:8000/users/sign-up", userInfo)
    .then(res => {
      const user = res.data;
      if (user) {
        document.cookie = `id_token=${
          user.tokens[0].token
        }; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
        dispatch({ type: SIGNUP, payload: user });
        Router.push("/profile");
      }
    })
    .catch(err => console.log(err));
};
