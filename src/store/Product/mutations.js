export function setItems(state, payload) {
  state.data = payload;
}

export function showHideCreateModal(state, payload) {
  state.modals.createItem = payload;
}

export function resetForm(state) {
  state.newItem = {
    name: "",
    category_id: null,
    barcode: "",
    item_description: "",
    sale_price: null,
  };
}

export function setEditItem(state, payload) {
  state.editItem.id = payload.id;
  state.editItem.name = payload.name;
  state.editItem.category_id = payload.category_id;
  state.editItem.barcode = payload.barcode;
  state.editItem.sale_price = payload.sale_price;
  state.editItem.item_description = payload.item_description;
}

export function setEditModal(state, payload) {
  state.modals.editItem = payload;
}

export function setLastUpdated(state, payload) {
  state.lastUpdated = payload;
}

export function setMedia(state, payload) {
  state.newItem.product_photo_id = payload.media_id;
}
