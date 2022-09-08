export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.investorAccountId = payload.investorAccountId;
  state.editItem.action_name = payload.action_name;
  state.editItem.date = payload.date;
  state.editItem.amount = payload.amount;
  state.editItem.toAccount = payload.toAccount;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}
