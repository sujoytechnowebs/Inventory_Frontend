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
  state.editItem.branch_id = payload.branch_id;
  state.editItem.date_of_sales = payload.date_of_sales;
  state.editItem.payment_method = payload.payment_method;
  state.editItem.note = payload.note;
  state.editItem.status = payload.status;
  state.editItem.application_received_date =
    payload.loan.application_received_date; // Let me check
  state.editItem.application_received_by = payload.application_received_by; // Let me check
  state.editItem.ewi_start_date = payload.ewi_start_date; // Let me check
  state.editItem.no_of_ewi = payload.no_of_ewi; // Let me check
  state.editItem.loan_amount = payload.loan_amount; // Let me check
  state.editItem.processing_fees = payload.processing_fees; // Let me check
  state.editItem.monthly_income = payload.monthly_income; // Let me check
  state.editItem.occupation = payload.occupation; // Let me check
  state.editItem.name = payload.name; // Let me check
  state.editItem.customer_name = payload.customer_name; // Let me check
  state.editItem.customer_address = payload.customer_address; // Let me check
  state.editItem.customer_phone = payload.customer_phone; // Let me check
  state.editItem.cust_type = payload.cust_type; // Let me check
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

export function addEditOption(state, payload) {
  let option = {
    id: state.editItem.purchase.length + 1,
    notes: "",
  };
  state.editItem.purchase.push(option);
}

export function setProductDetails(state, payload) {
  console.log("payload", payload);
  // state.newItem.purchase_details = payload;
  state.newItem.salesDetails.push({
    item_rate: payload.sale_price,
    quantity: null,
    discount: 0,
    custom_price: false,
    product_id: payload.id,
    product_name: payload.name,
  });
}

// Edit page

export function editProductDetails(state, payload) {
  console.log("payload", payload);
  // state.newItem.purchase_details = payload;
  state.editItem.salesDetails.push({
    item_rate: payload.sale_price,
    quantity: null,
    discount: 0,
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

// Edit page

export function removingProductDetails(state, payload) {
  console.log("payload", state);

  if (payload > -1) {
    // only splice array when item is found
    state.editItem.salesDetails.splice(payload, 1); // 2nd parameter means remove one item only
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
  // state.newItem.calculations = state.newItem.loan_amount - 2000;
}

// Testing Calculations

export function setTotalRate(state, index) {
  let currentObj = state.newItem.salesDetails[index];
  let quantity = currentObj.quantity ? currentObj.quantity : 1;
  let item_rate = currentObj.item_rate ? currentObj.item_rate : 0;
  currentObj.total = parseFloat(item_rate) * parseFloat(quantity);
  state.newItem.salesDetails[index] = currentObj;

  var total = 0;
  state.newItem.salesDetails.forEach((item) => {
    total += parseFloat(item.total);
  });
  state.newItem.grand_item_rate_total = parseFloat(total);
  state.newItem.loan_with_processing_fees =
    (state.newItem.grand_item_rate_total * 2) / 100;
}

export function calculationAfterDownPayment(state, payload) {
  state.newItem.loan_after_downpayment =
    state.newItem.grand_item_rate_total - payload;
}

export function calculationAfterProcessingFees(state, payload) {
  state.newItem.loan_with_processing_fees =
    (state.newItem.grand_item_rate_total * payload) / 100;
}

export function ewicalculation(state, payload) {
  state.newItem.per_ewi = state.newItem.loan_after_downpayment / payload;
}
