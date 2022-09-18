export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    account_name: null,
    type: "",
    branch_id: null,
    opening_balance: null,
    balance_type: "",
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.account_name = payload.account_name;
  state.editItem.phone = payload.phone;
  state.editItem.email = payload.email;
  state.editItem.city_id = payload.city_id;
  state.editItem.address_1 = payload.address_1;
  state.editItem.address_2 = payload.address_2;
  state.editItem.postcode = payload.postcode;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.adhaar_media_id = payload.adhaar_media_id;
  state.editItem.type = payload.type;
  state.editItem.account_no = payload.account_no;
  state.editItem.ifsc = payload.ifsc;
  state.editItem.bank_branch = payload.bank_branch;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setViewMoreDetailsMutation(state, payload) {
  state.modals.ViewMoreDetails = payload;
}
