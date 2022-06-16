import axios from "axios";
const endPoint = "/register";

export function register({ state, commit }) {
  return new Promise((resolve, reject) => {
    axios
      .post(endPoint, state.credentials)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
