export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
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

export function setReceiptDetailModel(state, payload) {
  state.modals.receiptModel = payload;
}

export function setReceiptDetails(state, payload) {
  // console.error("setReceiptDetails", payload)

  state.newItem.receiptsDetails.push({
    from_account_id: null,
    date_of_transaction: "",
    note: "",
    amount: "",

    to_account: null,
  });
}

export function removeReceiptDetails(state, payload) {
  if (payload > -1) {
    // only splice array when item is found
    state.newItem.receiptsDetails.splice(payload, 1); // 2nd parameter means remove one item only
  }
}
