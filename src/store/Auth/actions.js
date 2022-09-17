import { LocalStorage as SessionStorage } from "quasar";
import { api, axios } from "boot/axios";

export function login({ state, commit }, payload) {
  return new Promise((resolve, reject) => {
    api
      .post("/login", {
        email: state.credentials.email,
        password: state.credentials.password,
      })
      .then((response) => {
        SessionStorage.set("token", JSON.stringify(response.data.token));
        commit("setAuthUser", response.data.authUser);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function logOut({ state, commit }, payload) {
  return new Promise((resolve, reject) => {
    axios
      .get("/logout")
      .then((response) => {
        SessionStorage.remove("token");
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function check({ context, state }) {
  return new Promise((resolve, reject) => {
    var token = SessionStorage.getItem("token");

    if (token === null) {
      reject(false);
    } else {
      resolve(token);
    }
  });
}

/////////////////////

export function checkEmailAvailability({ state, commit }) {
  return new Promise((resolve, reject) => {
    api
      .post("check-email-availability", {
        email: state.signUp.email,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function checkUserNameAvailability({ state, commit }) {
  return new Promise((resolve, reject) => {
    api
      .post("check-username-availability", {
        username: state.signUp.username,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function register({ state, commit }) {
  return new Promise((resolve, reject) => {
    api
      .post("register", state.signUp)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function submitOTP({ state, commit }) {
  return new Promise((resolve, reject) => {
    api
      .post("verify-otp", {
        email: state.signUp.email,
        otp: state.otp,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function resendOTP({ state, commit }) {
  return new Promise((resolve, reject) => {
    api
      .post("resend-otp", {
        email: state.signUp.email,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// export function resetPassword({ state, commit }) {
//   return new Promise((resolve, reject) => {
//     api
//       .post("send-password-reset-otp", {
//         email: state.forget_password.email,
//       })
//       .then((response) => {
//         commit("passwordResetToken", response.data.token);
//         resolve(response);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

export function submitPasswordResetOTP({ state, commit }) {
  return new Promise((resolve, reject) => {
    api
      .post("verify-password-reset-otp", state.forget_password)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function resetPasssword({ state, commit }) {
  return new Promise((resolve, reject) => {
    api
      .post("reset-password", {
        email: state.forget_password.email,
        password: state.reset_passwords.password,
        confirmed_password: state.reset_passwords.confirmed_password,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// Check Authentication
// export function check({ context, state }) {
//   return new Promise((resolve, reject) => {
//     var token = SessionStorage.getItem("token");
//     var authUserID = SessionStorage.getItem("authUserID");

//     if (token === null) {
//       reject(false);
//     } else {
//       resolve(token);
//     }
//   });
// }

export function checkRoutePermission({ context, state }, routeAction) {
  return new Promise((resolve, reject) => {
    if (state.authUser.id) {
      if (state.authUser.acl[routeAction]) {
        resolve(true);
      } else {
        reject(false);
      }
    } else {
      this.dispatch("auth/fetchAuthUser")
        .then((response) => {
          if (state.authUser.acl[routeAction]) {
            resolve(true);
          } else {
            reject(false);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

export function checkAuthUserData({ state }) {
  if (state.authUser.id === undefined) {
    this.dispatch("auth/fetchAuthUser");
  }
}

export function fetchAuthUser({ commit, state }) {
  console.log("call 4 fetchAuthUser")
  return new Promise((resolve, reject) => {
    if (state.authUser.id === undefined) {
      axios
        .get("/profile")
        .then((response) => {
          commit("setAuthUser", response.data);
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

// Branch Set Up Switch

export function switchActiveBranch({ state, commit }, props) {
  return new Promise((resolve, reject) => {
    axios
      .post("set-active-branch", {
        branch_id: props,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}


export function changeEmail({ state, commit }, id) {
  return new Promise((resolve, reject) => {
    axios
      .post("change-email", state.change_email)
      .then((response) => {
        resolve(response);
        commit('resetChangeEmailForm')
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function resetPassword({ state, commit }, id) {
  return new Promise((resolve, reject) => {
    axios
      .post("reset-password", state.reset_password)
      .then((response) => {
        resolve(response);
        commit('resetResetPasswordForm')
      })
      .catch((err) => {
        reject(err);
      });
  });
}