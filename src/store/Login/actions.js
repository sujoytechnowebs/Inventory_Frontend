import { LocalStorage as SessionStorage } from "quasar";
import { api } from "boot/axios";

export function login({ state, commit }, payload) {
  return new Promise((resolve, reject) => {
    api
      .post("/login", {
        email: state.credentials.email,
        password: state.credentials.password,
      })
      .then((response) => {
        SessionStorage.set("token", JSON.stringify(response.data.token));
        // commit("setAuthUser", response.data.authUser);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
