export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    customer_id: null,
    branch_id: null,
    date_of_sales: "",
    payment_method: "",
    note: "",
    status: "",
    application_received_date: "",
    application_received_by: "",
    ewi_start_date: "",
    no_of_ewi: "",
    loan_amount: null,
    processing_fees: "",
    down_payment: "",
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.name = payload.name;
  state.editItem.code = payload.code;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.address = payload.address;
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

export function addNewOption(state, payload) {
  let option = {
    id: state.newItem.purchase.length + 1,
    notes: "",
  };
  state.newItem.purchase.push(option);
}

export function setProductDetails(state, payload) {
  console.log("payload", payload);
  // state.newItem.purchase_details = payload;
  state.newItem.salesDetails.push({
    item_rate: payload.sale_price,
    discount: null,
    quantity: null,
    discount: null,
    custom_price: false,
    product_id: payload.id,
    product_name: payload.name,
  });
}

export function removeProductDetails(state, payload) {
  console.log("payload", state);

  if (payload > -1) {
    // only splice array when item is found
    state.newItem.salesDetails.splice(payload, 1); // 2nd parameter means remove one item only
  }
}

export function calculateLoanAmount(state, payload) {
  state.newItem.loan_amount = 0;
  if (state.newItem.salesDetails.length > 0) {
    state.newItem.salesDetails.map((item) => {
      state.newItem.loan_amount =
        state.newItem.loan_amount + parseInt(item.item_rate);
    });
  }
}
