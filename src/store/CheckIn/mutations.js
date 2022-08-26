export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.opening_balance = payload.opening_balance;
  state.editItem.closing_balance = payload.closing_balance;
  state.editItem.checkin_datetime = payload.checkin_datetime;
  state.editItem.checkout_datetime = payload.checkout_datetime;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}
