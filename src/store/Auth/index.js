import { getField, updateField } from 'vuex-map-fields'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  getters:{
    getField,
    ...getters
  },
  mutations:{
    updateField,
    ...mutations
  },
  actions,
  state
}
