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

export function setProductDetailModel(state, payload) {
  state.modals.productModel = payload;
}

export function setProductDetails(state, payload) {
  console.log("payload", payload);
  state.newItem.salesReturnDetails.push({
    quantity: null,

    product_id: payload.id,
    product_name: payload.name,
  });
}

export function editProductDetails(state, payload) {
  console.log("payload", payload);
  state.editItem.salesReturnDetails.push({
    item_rate: null,
    discount: null,
    quantity: null,
    discount: null,
    tax_class_id: null,
    product_id: payload.id,
    product_name: payload.name,
  });
}

export function removeProductDetails(state, payload) {
  console.log("payload", state);

  if (payload > -1) {
    // only splice array when item is found
    state.newItem.salesReturnDetails.splice(payload, 1); // 2nd parameter means remove one item only
  }
}
