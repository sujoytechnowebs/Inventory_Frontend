export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    name: "",
    code: "",
    branch_id: "",
    address: "",
    village: "",
    pin: "",
    day: "",
    responsible_by: "",
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.name = payload.name;
  state.editItem.code = payload.code;
  state.editItem.branch_id = payload.branch_id;
  state.editItem.address = payload.address;
  state.editItem.day = payload.day;
  state.editItem.responsible_by = payload.response.id;
  state.editItem.village = payload.village;
  state.editItem.pin = payload.pin;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setViewMembersModal(state, payload) {
  state.modals.viewMembersModal = payload;
}
