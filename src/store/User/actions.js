import { api, axios } from "boot/axios";

const endPoint = "/users";
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

// Customer Filter

export function getCustomer({ commit, state }, props) {
  var params = {
    all: props.all,
    role: "customer",
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

// Staff Filter

export function getStaff({ commit, state }, props) {
  var params = {
    all: props.all,
    role: "user",
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

// Investor Filter

export function getInvestor({ commit, state }, props) {
  var params = {
    all: props.all,
    role: "investor",
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

// Vendor Filter

export function getVendor({ commit, state }, props) {
  var params = {
    all: props.all,
    role: "vendor",
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

// Customer Serial No.

// Customer Filter

export function getSerialNo({ commit, state }, props) {
  var params = {
    all: props.all,
    role: "customer",
  };

  return new Promise((resolve, reject) => {
    axios
      .get("branch_wise_customer", {
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

export function getRolesWithoutCustomer({ commit, state }, props) {
  var params = {
    search: props.search,
  };

  return new Promise((resolve, reject) => {
    axios
      .get("roles?hideCustomer=1", {
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
        // commit("setEditItem", response.data);
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

//Media

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

export function mediaVoter({ commit, state }, props) {
  return new Promise((resolve, reject) => {
    axios
      .post(mediaEndPoint, props, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        commit("setMediaVoter", response.data);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
