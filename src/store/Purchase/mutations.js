export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    vendor_id: null,
    date_of_purchase: "",
    branch_id: null,
    note: "",
    status: "",
    payment_method: "",
    grand_item_rate_total: 0,
  };
}

export function setEditItem(state, payload) {
  console.log(payload);
  state.editItem.id = payload.id;
  state.editItem.vendor_id = payload.vendor_id;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.date_of_purchase = payload.date_of_purchase;
  state.editItem.note = payload.note;
  state.editItem.status = payload.status;
  state.editItem.payment_method = payload.payment_method;
  state.editItem.purchase_details = payload.purchase_details;
  // payload.purchase_details.map((item) => {
  //   console.log("item", item);
  //   state.editItem.purchase_details.push({
  //     product_id: item.product.id,
  //     product_name: item.product.name,
  //     discount: item.discount,
  //     item_rate: item.item_rate,
  //     quantity: item.quantity,
  //     sales_rate: item.sales_rate,
  //   });
  // });
}

export function setProductDetails(state, payload) {
  state.newItem.purchase_details.push({
    item_rate: null,
    quantity: 1,
    discount: 0,
    sales_rate: null,
    product_id: payload.id,
    product_name: payload.name,
    product_serial_no: payload.productSlNo,
    total: 0,
  });
}

export function settingProductDetails(state, payload) {
  state.editItem.purchase_details.push({
    item_rate: null,
    quantity: 1,
    discount: 0,
    sales_rate: null,
    product_id: payload.id,
    product: { name: payload.name, productSlNo: payload.productSlNo },
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
    quantity: 1,
    discount: 0,
    sales_rate: null,
    product_id: payload.id,
    product_name: payload.name,
    total: 0,
  });
}

export function removeProductDetails(state, payload) {
  console.log("payload", state);
  if (payload > -1) {
    // only splice array when item is found
    state.newItem.purchase_details.splice(payload, 1); // 2nd parameter means remove one item only
  }
}

export function removingProductDetails(state, payload) {
  console.log("payload", state);
  if (payload > -1) {
    // only splice array when item is found
    state.editItem.purchase_details.splice(payload, 1); // 2nd parameter means remove one item only
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
