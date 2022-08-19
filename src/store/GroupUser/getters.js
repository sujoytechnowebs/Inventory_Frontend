export function records(state) {
  return state.data.data;
}

export function columns(state) {
  return state.columns;
}

export function showCreateModal(state) {
  return state.modals.createItem;
}

export function showEditModal(state) {
  return state.modals.editItem;
}

export function showViewMembersModal(state) {
  return state.modals.viewMembersModal;
}
