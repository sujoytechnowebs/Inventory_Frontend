export function clearData(state, payload) {
    state.items.data = [];
    state.newItem = {
        name:"",
        username:"",
        email:"",
        role_id:null,
    }
    state.editItem = {
        id: undefined,
        name:"",
        username:"",
        email:"",
        role_id:null,
    }
    state.modals = {
        createItem: false,
        editItem: false
    }
}

export function setEditItem(state, payload) {
    state.editItem._id = payload._id;
    state.editItem.name = payload.name;
    state.editItem.username = payload.username;
    state.editItem.email = payload.email;
    state.editItem.password = payload.password;
    state.editItem.role_id = payload.role_id;
}

export function setTableData(state, payload) {
    state.items.data = payload.data;
    state.items.pagination = payload.pagination;
    state.items.filter = payload.filter;
}


export function setLastUpdated(state, payload) {
    state.items.lastUpdated = payload;
}

export function showHideCreateModal(state, payload) {
    state.modals.createItem = payload
}

export function setEditModal(state, payload) {
    state.modals.editItem = payload
}

export function setFilterTrashed(state, payload) {
    state.items.filter.trashed = payload;
    state.items.data = [];
}


