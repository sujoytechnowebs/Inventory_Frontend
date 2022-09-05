export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.vendor_id = payload.vendor_id;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.date_of_purchase = payload.date_of_purchase;
  state.editItem.note = payload.note;
  state.editItem.status = payload.status;
  state.editItem.payment_method = payload.payment_method;
}

export function setProductDetails(state, payload) {
  console.log("payload", payload);
  state.newItem.purchase_details.push({
    item_rate: null,
    discount: null,
    quantity: null,
    discount: null,
    sales_rate: null,
    product_id: payload.id,
    product_name: payload.name,
  });
}

export function editProductDetails(state, payload) {
  console.log("payload", payload);
  state.editItem.purchase_details.push({
    item_rate: null,
    discount: null,
    quantity: null,
    discount: null,
    sales_rate: null,
    product_id: payload.id,
    product_name: payload.name,
  });
}

export function removeProductDetails(state, payload) {
  console.log("payload", state);
  // let option = state.newItem.purchase_details.find(
  //   (option) => option.id == payload.id
  // );
  // state.newItem.purchase_details.splice(
  //   state.newItem.purchase_details.indexOf(option),
  //   1
  // );
  if (payload > -1) {
    // only splice array when item is found
    state.newItem.purchase_details.splice(payload, 1); // 2nd parameter means remove one item only
  }
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
