export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    city_name: "",
    state_id: "",
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.collected_by = payload.collected_by;
  state.editItem.collected_date = payload.collected_date;
  state.editItem.payment_method = "cash";
  state.editItem.amount = payload.amount;
  state.editItem.emi_amount = payload.emi_amount;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setPrintData(state, payload) {
  state.printableData = payload;
}
