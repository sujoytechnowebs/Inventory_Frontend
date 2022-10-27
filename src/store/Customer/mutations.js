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
    address_1: "",
    address_2: "",
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
    aadhar_card_no: "",
    opening_balance: "",
    opening_balance_type: "",
    voter_card_no: null,
    role: "customer",
    village: "",
    pin: "",
  };
}

export function setEditItem(state, payload) {
  console.log(payload);
  state.editItem.id = payload.id;
  state.editItem.name = payload.name;
  state.editItem.occupation = payload.occupation;
  state.editItem.spouse_parent_name = payload.spouse_parent_name;
  state.editItem.DOB = payload.DOB;
  state.editItem.phone = payload.account.phone;
  state.editItem.email = payload.email;
  state.editItem.house = payload.house;
  state.editItem.monthly_income = payload.monthly_income;
  state.editItem.city_id = payload.account.city_id;
  state.editItem.opening_balance = payload.account.opening_balance;
  state.editItem.opening_balance_type = payload.account.opening_balance_type;
  state.editItem.group_id = payload.user_group.group.name;
  state.editItem.group_role = payload.user_group.group_role;
  state.editItem.address_1 = payload.account.address_1;
  state.editItem.account_name = payload.account.account_name;
  state.editItem.aadhar_card_no = payload.account.aadhar_card_no;
  state.editItem.voter_card_no = payload.account.voter_card_no;
  state.editItem.name = payload.village;
  state.editItem.name = payload.pin;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setMedia(state, payload) {
  console.log("checking payload", payload);
  state.newItem.aadhar_media_id = payload.media_id;
}

export function setMediaVoter(state, payload) {
  console.log("checking payload", payload);
  state.newItem.voter_media_id = payload.media_id;
}
