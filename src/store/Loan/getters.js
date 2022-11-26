/*
export function someGetter (state) {
}
*/

export function records(state) {
  return state.data.data;
}

export function columns(state) {
  return state.columns;
}

export function showCreateModal(state) {
  return state.modals.createItem;
}

export function showEditModal(state) {
  return state.modals.editItem;
}

export function showVerifyModal(state) {
  return state.modals.verify;
}

export function showApproveModal(state) {
  return state.modals.approve;
}

export function showDisburseModal(state) {
  return state.modals.disburse;
}

export function lastUpdated(state) {
  return state.lastUpdated;
}

export function getBengaliData(state) {
  return state.printBengaliData;
}

// Test By Sujoy

export function getCustomerData(state) {
  return state.customerData;
}

export function showDetailsModal(state) {
  return state.modals.details;
}

// export function getModelClose(state) {
//   return state.modals.details;
// }
