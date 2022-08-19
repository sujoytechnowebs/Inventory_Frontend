export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.collected_by = payload.collected_by;
  state.editItem.collected_date = payload.collected_date;
  state.editItem.payment_method = payload.payment_method;
  state.editItem.numberOfInstallment = payload.numberOfInstallment;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}
