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
  state.newItem.purchase_details.push({
    item_rate: null,
    discount: null,
    quantity: null,
    discount: 0,
    sales_rate: null,
    product_id: payload.id,
    product_name: payload.name,
    total: 0,
  });
}

export function setTotalRate(state, index) {
  let currentObj = state.newItem.purchase_details[index];
  let quantity = currentObj.quantity ? currentObj.quantity : 1;
  let item_rate = currentObj.item_rate ? currentObj.item_rate : 0;
  currentObj.total = parseFloat(item_rate) * parseFloat(quantity);
  state.newItem.purchase_details[index] = currentObj;

  var total = 0;
  state.newItem.purchase_details.forEach((item) => {
    total += parseFloat(item.total);
  });
  state.newItem.grand_item_rate_total = parseFloat(total);
}

export function editProductDetails(state, payload) {
  state.editItem.purchase_details.push({
    item_rate: null,
    discount: null,
    quantity: null,
    discount: 0,
    sales_rate: null,
    product_id: payload.id,
    product_name: payload.name,
    total: 0,
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
