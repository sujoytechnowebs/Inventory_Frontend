export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    from_account: null,
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.city_name = payload.city_name;
  state.editItem.state_id = payload.state_id;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setPaymentDetailModel(state, payload) {
  state.modals.receiptModel = payload;
}

export function setPaymentDetails(state, payload) {
  // console.error("setReceiptDetails", payload)

  state.newItem.paymentsDetails.push({
    to_account_id: null,
    date_of_transaction: "",
    note: "",
    amount: "",
  });
}

export function removePaymentDetails(state, payload) {
  if (payload > -1) {
    // only splice array when item is found
    state.newItem.paymentsDetails.splice(payload, 1); // 2nd parameter means remove one item only
  }
}
