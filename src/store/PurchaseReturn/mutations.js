export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    purchase_id: "",
    date_of_return: "",
    note: "",
    payment_method: "",
    status: "",
  };
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

export function setProductDetails(state, payload) {
  console.log("payload", payload);
  state.newItem.purchase_return_details.push({
    quantity: null,
    product_id: payload.id,
    product_name: payload.name,
  });
}

export function editProductDetails(state, payload) {
  console.log("payload", payload);
  state.editItem.purchase_return_details.push({
    quantity: null,
    product_id: payload.id,
    product_name: payload.name,
  });
}

export function removeProductDetails(state, payload) {
  console.log("payload", state);
  if (payload > -1) {
    // only splice array when item is found
    state.newItem.purchase_return_details.splice(payload, 1); // 2nd parameter means remove one item only
  }
}

export function setProductDetailModel(state, payload) {
  state.modals.productModel = payload;
}
