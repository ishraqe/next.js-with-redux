const user = [];

export default class AuthService {
  constructor() {
    user: [];
  }

  //   logIn(email, password) {
  //     for (let i = 0; i < user.length; i++) {
  //       if (email === user[i].email) {
  //         return password === user[i].password ? user[i].token : false;
  //       }
  //     }
  //     return false;
  //   }

  createUser(userInfo) {
    user.push(userInfo);
    return userInfo.token;
  }
}
