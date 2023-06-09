<template>
  <q-table
    class="my-sticky-header-table no-border-radius shadow-1"
    :title="title"
    :rows="records"
    :columns="columns"
    v-model:pagination="pagination"
    :filter="filters"
    :loading="loading"
    row-key="id"
    @row-click="onRowClick"
    @request="onRequest"
  >
    <template v-slot:top>
      <slot name="top"></slot>
    </template>

    <template v-slot:body="props" v-if="customBodySlot">
      <slot name="customBodySlot" v-bind:row="props.row"></slot>
    </template>

    <template v-slot:body-cell-actions="props" v-if="customAction">
      <slot name="actions" v-bind:row="props.row"></slot>
    </template>
    <template v-slot:body-cell-actions="props" v-else>
      <q-td :props="props">
        <slot
          name="aditionalActions"
          v-if="aditionalActions"
          v-bind:row="props.row"
        ></slot>
        <q-btn
          flat
          round
          dense
          color="accent"
          icon="edit"
          class="q-ml-sm"
          @click="onClickEdit(props.row)"
          v-if="hasEditPermission"
          v-show="canEdit"
        >
          <q-tooltip> edit </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          dense
          color="green"
          icon="visibility"
          class="q-ml-sm"
          @click="onClickView(props.row)"
          v-if="viewLink != ''"
        >
          <q-tooltip> view </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          dense
          color="negative"
          icon="clear"
          @click="onClickDelete(props.row)"
          v-show="canDelete"
        >
          <q-tooltip> delete </q-tooltip>
        </q-btn>
      </q-td>
    </template>
  </q-table>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      fab
      icon="add"
      color="primary"
      @click="setCreateModal(true)"
      v-show="canAdd"
      v-if="hasEditPermission"
    />
  </q-page-sticky>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  watch,
  onMounted,
  defineProps,
  onBeforeUnmount,
} from "vue";
import { useStore } from "vuex";
import useStoreModule from "../../libs/useStoreModule.js";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { Tnotify } from "../../libs/custom.js";
import moment from "moment";

export default defineComponent({
  name: "IndexPage",
  props: {
    title: String,
    dataStore: String,
    editRoute: {
      type: String,
      default: "",
    },
    customDelete: {
      type: Boolean,
      default: false,
    },
    filter: Object,
    customCellTypes: [],
    rowClickable: {
      type: Boolean,
      default: false,
    },
    visibleColumns: {
      type: Array,
      default: null,
    },
    viewLink: {
      type: String,
      default: "",
    },
    customAction: {
      default: false,
      type: Boolean,
    },
    hasEditPermission: {
      default: false,
      type: Boolean,
    },
    aditionalActions: {
      default: false,
      type: Boolean,
    },
    canEdit: {
      default: true,
      type: Boolean,
    },
    canAdd: {
      default: true,
      type: Boolean,
    },
    canDelete: {
      default: true,
      type: Boolean,
    },
    customBodySlot: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    const $q = useQuasar();
    const store = useStore();
    const loading = ref(false);
    const unsubscribe = ref(null);
    const router = useRouter();

    const pagination = ref({
      sortBy: "created_at",
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    });

    const filters = reactive(props.filter);
    const dataStore = reactive(props.dataStore);

    const { getAction, getMutations, getGetters } = useStoreModule();
    const { getItems } = getAction(dataStore, ["getItems"]);
    const { setItems } = getMutations(dataStore, ["setItems"]);
    const { setLastUpdated } = getMutations(dataStore, ["setLastUpdated"]);

    // const { records } = getGetters(dataStore, ["records"]);
    const records = ref([]);

    const { columns } = getGetters(dataStore, ["columns"]);
    const { lastUpdated } = getGetters(dataStore, ["lastUpdated"]);
    const { setEditItem } = getMutations(dataStore, ["setEditItem"]);
    const { setEditModal } = getMutations(dataStore, ["setEditModal"]);
    const { showHideCreateModal } = getMutations(dataStore, [
      "showHideCreateModal",
    ]);

    onMounted(() => {
      onRequest({
        pagination: pagination.value,
        filter: filters,
      });

      // unsubscribe.value = store.subscribe((mutation, state) => {
      //   if (mutation.type == dataStore + "/setLastUpdated") {
      //     onRequest({
      //       pagination: pagination.value,
      //       filter: filters,
      //     });
      //   }
      // });
    });

    const onRequest = (params) => {
      loading.value = true;
      getItems(params)
        .then((response) => {
          // set data to proper variables
          pagination.value.page = response?.data?.current_page;
          pagination.value.rowsPerPage = response?.data?.per_page;
          pagination.value.rowsNumber = response?.data?.total;
          pagination.value.sortBy = params.pagination.sortBy;
          pagination.value.descending = params.pagination.descending;

          // create item object to update the store
          let tableData = {};
          tableData.pagination = pagination;
          tableData.filter = props.filter;
          tableData.data = response?.data?.data;

          records.value = response?.data?.data;
          // setItems(tableData)
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const onRowClick = (evt, row) => {
      return;
    };

    const setCreateModal = (params) => {
      showHideCreateModal(true);
    };

    const onClickEdit = (params) => {
      setEditItem(params);
      setEditModal(true);
    };
    // onClickView(props) {
    //   this.$router.push({ name: this.viewLink, params: { id: props.id } });
    // },

    function onClickDelete(param) {
      $q.dialog({
        title: "Delete Confirmation",
        message: "Are you sure you want to Delete",
        ok: {
          label: "Delete",
          unelevated: true,
          color: "red-5",
        },
        cancel: {
          unelevated: true,
          color: "",
          textColor: "black",
        },
        persistent: true,
      }).onOk(() => {
        loading.value = false;
        store
          .dispatch(props.dataStore + "/deleteItem", param)
          .then((res) => {
            onRequest({
              pagination: pagination,
              filter: props.filter,
            });
            Tnotify(
              {
                message: res.data.message,
                type: "positive",
              },
              this
            );
          })
          .catch((err) => {
            Tnotify(
              {
                message: err.message,
                type: "negative",
              },
              this
            );
          });
      });
    }

    onBeforeUnmount(() => {
      // unsubscribe();
    });

    watch(lastUpdated, async (newValue, oldValue) => {
      if (lastUpdated.value != null) {
        onRequest({
          pagination: pagination.value,
          filter: filters,
        });
      }
    });

    return {
      records,
      columns,
      loading,
      pagination,
      filters,
      onRequest,
      onRowClick,
      onClickEdit,
      setCreateModal,
      onClickDelete,
    };
  },
});
</script>
