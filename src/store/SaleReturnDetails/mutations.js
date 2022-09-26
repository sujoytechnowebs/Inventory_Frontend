export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.name = payload.name;
  state.editItem.code = payload.code;
  state.editItem.address_1 = payload.address_1;
  state.editItem.address_2 = payload.address_2;
  state.editItem.postcode = payload.postcode;
  state.editItem.city_id = payload.city_id;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

// This is the test

export function setModalItem(state, payload) {
  state.modalItem.id = payload.id;
}

export function setViewProductsModal(state, payload) {
  state.modals.viewProductsModal = payload;
}

export function setViewProductsDetails(state, payload) {
  console.log("checking payload", payload);
  state.viewProductsDetails = Object.assign({}, payload);
}
