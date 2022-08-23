/*
export function someGetter (state) {
}
*/

export function records(state) {
  return state.data.data;
}

export function columns(state) {
  return state.columns;
}

// export function filter(state) {
//   return state.items.filter;
// }

// export function lastUpdated(state) {
//   return state.items.lastUpdated;
// }

export function showCreateModal(state) {
  return state.modals.createItem;
}

export function showEditModal(state) {
  return state.modals.editItem;
}

export function showProductDetailModel(state) {
  return state.modals.productModel;
}
