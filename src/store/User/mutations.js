export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    name: "",
    email: "",
    role_id: null,
    password: "",
    account_name: "",
    phone: null,
    city_id: null,
    postcode: null,
    aadhar_media_id: null,
    account_no: null,
    ifsc: "",
    branch: "",
    branch_id: "",
    aadhar_card_no: "",
    bank_branch: "",
    spouse_parent_name: "",
    occupation: "",
    house: "",
    monthly_income: "",
    group_id: "",
    group_role: "",
    DOB: "",
    opening_balance: "",
    opening_balance_type: "",
    voter_card_no: null,
    address: "",
    near: "",
    village: "",
    post: "",
    block: "",
    district: "",
    pin: "",
  };
}

export function setEditItem(state, payload) {
  console.log(payload);
  state.editItem.id = payload.id;
  state.editItem.name = payload.name;
  state.editItem.email = payload.email;
  state.editItem.role = payload.user_role.role.code;
  state.editItem.code = payload.user_role.role.code;
  state.editItem.password = payload.password;
  state.editItem.account_name = payload.account.account_name;
  state.editItem.phone = payload.account.phone;
  state.editItem.address_1 = payload.account.address_1;
  state.editItem.address_2 = payload.account.address_2;
  state.editItem.postcode = payload.postcode;
  state.editItem.adhaar_media_id = payload.account.adhaar_media_id;
  state.editItem.account_no = payload.account.account_no;
  state.editItem.ifsc = payload.account.ifsc;
  state.editItem.bank_branch = payload.account.bank_branch;
  state.editItem.branch_id = payload.account.branch_id;
  state.editItem.opening_balance = payload.account.opening_balance;
  state.editItem.opening_balance_type = payload.account.opening_balance_type;
  state.editItem.aadhar_card_no = payload.account.aadhar_card_no;
  state.editItem.voter_card_no = payload.account.voter_card_no;
  state.editItem.city_id = payload.account.city_id;
  state.editItem.address = payload.account.address;
  state.editItem.near = payload.account.near;
  state.editItem.village = payload.account.village;
  state.editItem.post = payload.account.post;
  state.editItem.block = payload.account.block;
  state.editItem.district = payload.account.district;
  state.editItem.pin = payload.account.pin;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setMedia(state, payload) {
  state.newItem.aadhar_media_id = payload.media_id;
}

export function setMediaVoter(state, payload) {
  state.newItem.voter_media_id = payload.media_id;
}
