export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.customers_id = payload.customers_id;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.application_received_date = payload.application_received_date;
  state.editItem.application_received_by = payload.application_received_by;
  state.editItem.ewi_start_date = payload.ewi_start_date;
  state.editItem.loan_amount = payload.loan_amount;
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
