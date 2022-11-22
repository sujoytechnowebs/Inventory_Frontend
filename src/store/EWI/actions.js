import { api, axios } from "boot/axios";

const endPoint = "/ewi";
const instantendPoint = "/ewi-payment-instant";
const endCollection = "/ewi-payment-collection";
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
    groupId: props.groupId ? props.groupId : state.filter.groupId,
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
      .put(endCollection + "/" + state.editItem.id, state.editItem)
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

//Report List in excel is here

export function getReport({ commit, state }, props) {
  var params = {
    status: state?.filter?.status,
    ewi_date: state?.filter?.ewi_date,
    group_code: state?.filter?.group_code,
  };

  return new Promise((resolve, reject) => {
    axios
      .get("export-ewi", {
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

//Report List in pdf is here

export function getReportPdf({ commit, state }, props) {
  var params = {
    status: state?.filter?.status,
    ewi_date: state?.filter?.ewi_date,
    group_code: state?.filter?.group_code,
  };

  return new Promise((resolve, reject) => {
    axios
      .get("ewi-report-pdf", {
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

//Report Collection Sheet in pdf is here

export function getReportCollection({ commit, state }, props) {
  var params = {
    groupId: state?.filter?.groupId,
    date: state?.filter?.date,
  };

  return new Promise((resolve, reject) => {
    axios
      .get("ewi_collection_sheet", {
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

// Test

export function instantPay({ commit, state }, id) {
  return new Promise((resolve, reject) => {
    axios
      .put(instantendPoint + "/" + id)
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

// Invoice Download

export function getReportInvoice({ commit, state }, props) {
  return new Promise((resolve, reject) => {
    axios
      .get(`ewi_payment_slip-print/${props.invoice_id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
