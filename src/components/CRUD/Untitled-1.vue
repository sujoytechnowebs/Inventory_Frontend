<script>
import { mapFields } from "vuex-map-fields";
import { ref, reactive, computed } from "vue";
import { defineComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

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
    canDelete: {
      default: true,
      type: Boolean,
    },
  },
  setup(props) {


    const loading= reactive(false);
    const pagination = reactive ({
        sortBy: "created_at",
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0,
    });
    const icon= reactive("list");

    const records = computed(() => 1);
    const columns = computed(() => 1);
    const lastUpdated = computed(() => 1);

    // const { getAction } = useStoreModule();
    // const { register } = getAction("register", ["register"]);
    // const loading = ref(false);

    // const onSubmit = () => {
    //   loading.value = true;
    //   register()
    //     .then((response) => {
    //       console.log("response", response);
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //     })
    //     .finally(() => {
    //       console.log("finally", "finally");
    //       loading.value = false;
    //     });
    // };

    onMounted(() => {
        onRequest({
          pagination: pagination,
          filter: props.filter,
        })
    })

    onRequest(params) {
    const onRequest = () => {
      this.loading = true;
      this.$store
        .dispatch(this.dataStore + "/getItems", params)
        .then((response) => {
          // set data to proper variables
          this.pagination.page = response.data.current_page;
          this.pagination.rowsPerPage = response.data.per_page;
          this.pagination.rowsNumber = response.data.total;
          this.pagination.sortBy = params.pagination.sortBy;
          this.pagination.descending = params.pagination.descending;

          // create item object to update the store
          let tableData = {};
          tableData.pagination = this.pagination;
          tableData.filter = this.filter;
          tableData.data = response.data.data;

          this.$store.commit(`${this.dataStore}/setTableData`, tableData);
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    },

    onRowClick(evt, row) {
      if (props.rowClickable) this.onClickView(row);
      else {
        return;
      }
    },

    // onClickEdit(props) {
    //   this.$store.commit(this.dataStore + "/setEditItem", props);
    //   this.$router.push({ name: this.editRoute, params: { id: props.id } });
    // },
    // onClickView(props) {
    //   this.$router.push({ name: this.viewLink, params: { id: props.id } });
    // },
    // onClickDelete(props) {
    //   this.$q
    //     .dialog({
    //       title: "Delete Confirmation",
    //       message: "Are you sure you wna to Delete",
    //       ok: {
    //         label: "Delete",
    //         unelevated: true,
    //         color: "red-5",
    //       },
    //       cancel: {
    //         unelevated: true,
    //         color: "",
    //         textColor: "black",
    //       },
    //       persistent: true,
    //     })
    //     .onOk(() => {
    //       this.loading = false;
    //       this.$store
    //         .dispatch(this.dataStore + "/deleteItem", props)
    //         .then((res) => {
    //           this.onRequest({
    //             pagination: this.pagination,
    //             filter: this.filter,
    //           });
    //           Tnotify(
    //             {
    //               message: res.data.message,
    //               type: "positive",
    //             },
    //             this
    //           );
    //         })
    //         .catch((err) => {
    //           Tnotify(
    //             {
    //               message: err.message,
    //               type: "negative",
    //             },
    //             this
    //           );
    //         });
    //     });
    // },

    return {
        records,
        columns,
        lastUpdated,
    //   onSubmit,
    //   loading,
    };
  },
});
</script>
