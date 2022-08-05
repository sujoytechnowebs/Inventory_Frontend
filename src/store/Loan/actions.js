import { api, axios } from "boot/axios";

const endPoint = "/loans";
const verifypoint = "/loan-varification";
const approvepoint = "/loan-final-approval";
const disbursepoint = "/loan-disburst";
const mediaEndPoint = "/media";

import moment from "moment";

export function getItems({ commit, state }, props) {
  if (props.pagination.descending == true) {
    var direction = "DESC";
  } else {
    var direction = "ASC";
  }

  var params = {
    sort: props.pagination.sortBy,
    direction: direction,
    page: props.pagination.page,
    rowsPerPage: props.pagination.rowsPerPage,
    search: props.search ? props.search : state.filter.search,
  };

  return new Promise((resolve, reject) => {
    axios
      .get(endPoint, {
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

// Media

export function media({ commit, state }, props) {
  return new Promise((resolve, reject) => {
    axios
      .post(mediaEndPoint, props, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        commit("setMedia", response.data);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// Update Document

export function mediaUpdate({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios
      .put(mediaEndPoint + "/" + state.editItem.id, state.editItem, props, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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

//Verify Item Function

export function verifyUpdate({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios
      .put(verifypoint + "/" + state.verifyItem.id, state.verifyItem)
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

//Approve Item Function

export function approveUpdate({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios
      .put(`loan-final-approval/${state.approveItem.id}`, state.approveItem)
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

//Disburse Item Function

export function disburseUpdate({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios
      .put(disbursepoint + "/" + state.verifyItem.id, state.verifyItem)
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
