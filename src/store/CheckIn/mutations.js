export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.staff_id = payload.staff_id;
  state.editItem.checkin_datetime = payload.checkin_datetime;
  state.editItem.Checkout_datetime = payload.Checkout_datetime;
  state.editItem.Opening_balance = payload.Opening_balance;
  state.editItem.Closing_balance = payload.Closing_balance;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}
