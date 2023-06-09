export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    customers_id: null,
    branch_id: null,
    application_received_date: "",
    application_received_by: "",
    ewi_start_date: "",
    loan_amount: null,
    processing_fees: null,
    down_payment: null,
    status: "",
    media_id: null,
    document_type: "",
    type: "",
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.customers_id = payload.customers_id;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.application_received_date = payload.application_received_date;
  state.editItem.application_received_by = payload.application_received_by;
  state.editItem.ewi_start_date = payload.ewi_start_date;
  state.editItem.loan_amount = payload?.loan_amount
    ? payload.loan_amount
    : null;
  state.editItem.processing_fees = payload.processing_fees;
  state.editItem.down_payment = payload.down_payment;
  state.editItem.status = payload.status;
  state.editItem.media_id = payload.media_id;
  state.editItem.document_type = payload.document_type;
  state.editItem.type = payload.type;
  state.editItem.no_of_ewi = payload.no_of_ewi;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function showHideVerifyModal(state, payload) {
  state.modals.verify = payload;
}

export function setVerificationData(state, payload) {
  state.verifyItem = Object.assign({}, payload);
}

export function showHideApproveModal(state, payload) {
  state.modals.approve = payload;
}

export function setApproveData(state, payload) {
  state.approveItem = Object.assign({}, payload);
}

export function setMedia(state, payload) {
  state.newItem.media_id = payload.media_id;
}

export function showHideDisburseModal(state, payload) {
  state.modals.disburse = payload;
}

export function setDisburseData(state, payload) {
  state.disburseItem.id = payload.id;
  state.disburseItem.ewi_start_date = payload.ewi_start_date;
}

export function setBengaliData(state, payload) {
  state.printBengaliData = payload;
}

// Test By Sujoy

export function setAllData(state, payload) {
  state.customerData = payload;
}

export function setDetailsModal(state, payload) {
  state.modals.details = payload;
}

// export function setViewCustomersModal(state, payload) {
//   console.log("loan mutation", payload);
//   state.modals.details = payload;
// }
