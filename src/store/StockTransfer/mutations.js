export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.product_id = payload.product_id;
  state.editItem.date = payload.date;
  state.editItem.from_branch_id = payload.from_branch_id;
  state.editItem.to_branch_id = payload.to_branch_id;
  state.editItem.quantity = payload.quantity;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}
