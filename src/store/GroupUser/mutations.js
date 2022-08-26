export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.group_id = payload.group_id;
  state.editItem.group_role = payload.group_role;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setModalItem(state, payload) {
  state.modalItem.id = payload.id;
  state.modalItem.name = payload.name;
  state.modalItem.code = payload.code;
  state.modalItem.branch_id = payload.branch_id;
  state.modalItem.address = payload.address;
}

export function setViewMembersModal(state, payload) {
  state.modals.viewMembersModal = payload;
}
