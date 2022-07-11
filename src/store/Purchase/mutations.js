export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.vendor_id = payload.vendor_id;
  state.editItem.date_of_purchase = payload.date_of_purchase;
  state.editItem.amount = payload.amount;
  state.editItem.total_quantity = payload.total_quantity;
  state.editItem.note = payload.note;
  state.editItem.status = payload.status;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}
