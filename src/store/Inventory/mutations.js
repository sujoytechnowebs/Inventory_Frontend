export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    branch_id: null,
    product_id: null,
    quantity: null,
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.product_id = payload.product_id;
  state.editItem.quantity = payload.quantity;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}
