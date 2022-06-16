<template>
  <q-table
    class="my-sticky-header-table no-border-radius shadow-1"
    :title="title"
    :data="records"
    :columns="columns"
    :pagination="pagination"
    :filter="filter"
    :loading="loading"
    row-key="id"
    @row-click="onRowClick"
    @request="onRequest">

      <template v-slot:top>
        <slot name="top"></slot>
      </template>

      <template v-slot:body="props">
        <slot name="customBodySlot"  v-bind:row="props.row"></slot>
      </template>
      
      <template v-slot:body-cell-actions="props" v-if="customAction">
        <slot name="actions" v-bind:row="props.row"></slot>
      </template>
      <template v-slot:body-cell-actions="props" v-else>
        <q-td :props="props">
          <slot name="aditionalActions"  v-if="aditionalActions" v-bind:row="props.row"></slot>
          <q-btn flat round dense color="accent" icon="edit" class="q-ml-sm" @click="onClickEdit(props.row)" v-if="editRoute != '' && hasEditPermission">
            <q-tooltip>
            Edit 
            </q-tooltip>
          </q-btn>
          <q-btn flat round dense color="green" icon="visibility" class="q-ml-sm" @click="onClickView(props.row)" v-if="viewLink != ''">
            <q-tooltip>
            View 
            </q-tooltip>
          </q-btn>
          <q-btn flat round dense color="negative" icon="clear" @click="onClickDelete(props.row)" v-if="hasEditPermission">
            <q-tooltip>
            Delete 
            </q-tooltip>
          </q-btn>
        </q-td>
      </template>
  </q-table>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Tnotify } from '../../libs/custom.js'

export default {
  props: {
    title: String,
    dataStore: String,
    editRoute: {
      type: String,
      default: ''
    },
    filter: Object,
    customCellTypes: [],
    rowClickable: {
      type: Boolean,
      default: false
    },
    visibleColumns: {
      type: Array,
      default: null,
    },
    viewLink:{
      type: String,
      default: '',
    },
    customAction: {
      default: false,
      type: Boolean
    },
    hasEditPermission: {
      default: false,
      type: Boolean
    },
    aditionalActions: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      loading: false,
      pagination: {
        sortBy: 'created_at',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0
      },
      icon: 'list',
      unsubscribe: null,
    }
  },
  computed: {
    records(){
        return this.$store.getters[`${this.dataStore}/items`];
    },  
    columns(){
        return this.$store.getters[`${this.dataStore}/columns`];
    }, 
    lastUpdated(){
        return this.$store.getters[`${this.dataStore}/lastUpdated`];
    },    
  },
  methods: {
    onRequest(props){
        this.loading = true
        this.$store.dispatch(this.dataStore + "/getItems", props)
          .then(response => {
            // set data to proper variables
            this.pagination.page = response.data.current_page;
            this.pagination.rowsPerPage = response.data.per_page;
            this.pagination.rowsNumber = response.data.total;
            this.pagination.sortBy = props.pagination.sortBy
            this.pagination.descending = props.pagination.descending

            // create item object to update the store
            let tableData = {};
            tableData.pagination = this.pagination
            tableData.filter = this.filter
            tableData.data = response.data.data

            this.$store.commit(`${this.dataStore}/setTableData`, tableData);
            this.loading = false
          })
          .catch(err => {
            this.loading = false
          })
      },
      onRowClick(evt, row){
        if(this.rowClickable)
          this.onClickView(row)
        else{
          return
        }
      },
      onClickEdit(props){
        this.$store.commit(this.dataStore + "/setEditItem", props)
        this.$router.push({name: this.editRoute, params: { id: props.id }})
      },
      onClickView(props){
          this.$router.push({name: this.viewLink, params: { id: props.id }})
      },
      onClickDelete(props){
        this.$q
        .dialog({
          title: 'Confirm',
          message: 'Are you sure to delete this item?',
          ok: {
            label: 'Delete',
            unelevated: true,
            color: 'red-5'
          },
          cancel: {
            unelevated: true,
            color: '',
            textColor: 'black'
          },
          persistent: true
        })
        .onOk(() => {
          this.loading = false
          this.$store
            .dispatch(this.dataStore + '/deleteItem', props)
            .then(res => {
              this.onRequest({
                pagination: this.pagination,
                filter: this.filter
              })
              Tnotify({
                message: "Item Deleted successfully",
                type: 'positive',
              }, this);
            })
            .catch(err => {
              Tnotify({
                message: err.message,
                type: 'negative',
              }, this);
            })
        })
      },
    },
    created() {
        this.onRequest({
          pagination: this.pagination,
          filter: this.filter
        });

        this.unsubscribe = this.$store.subscribe((mutation, state) => {
          //check on which commit you need to reload this request
          if (mutation.type == this.dataStore + '/setLastUpdated'){
            //do your stuff here
            this.onRequest({
              pagination: this.pagination,
              filter: this.filter
            })
          }
        })
    },
    beforeDestroy() {
      this.unsubscribe()
    },
  }
</script>

<style scoped>

</style>