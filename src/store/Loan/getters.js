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
