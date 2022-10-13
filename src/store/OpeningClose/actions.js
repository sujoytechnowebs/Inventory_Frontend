import { api, axios } from "boot/axios";

const endPoint = "/opening-closing-balance";
import moment from "moment";

export function getOpeningClosingSummary({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios
      .get(endPoint)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getRoles({ commit, state }, props) {
  var params = {
    search: props.search,
  };

  return new Promise((resolve, reject) => {
    axios
      .get("roles", {
        params: params,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getItem({ commit, state }, id) {
  return new Promise((resolve, reject) => {
    axios
      .get(endPoint + "/" + id)
      .then((response) => {
        commit("setEditItem", response.data);
        commit("setLastUpdated", moment());
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function createItem({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios
      .post(endPoint, state.newItem)
      .then((response) => {
        commit("setLastUpdated", moment());
        commit("showHideCreateModal", false);
        commit("resetForm");
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateItem({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios
      .put(endPoint + "/" + state.editItem.id, state.editItem)
      .then((response) => {
        if (response.data) {
          commit("setLastUpdated", moment());
          commit("setEditModal", false);
          resolve(response);
        } else {
          reject({
            message: "Item not found",
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function deleteItem({ commit, state }, item) {
  return new Promise((resolve, reject) => {
    axios
      .delete(endPoint + "/" + item.id, item)
      .then((response) => {
        commit("setLastUpdated", moment());
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
