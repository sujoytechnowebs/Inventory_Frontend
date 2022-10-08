<template>
  <div>
    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
        :columns="columns"
        :filter="filter"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Inventory Management Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <div class="col-6">
              <q-btn
                label="Download Report"
                no-caps
                outline
                color="primary"
                @click="alert = true"
              >
              </q-btn>
            </div>
            <div class="col-6">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="search"
                clearable
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </template>
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'inventory-form' : ''">
          <CreateInventory v-bind:modal="true"></CreateInventory>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'inventory-form' : ''">
          <EditInventory v-bind:modal="true"></EditInventory>
        </div>
      </q-dialog>
    </q-card-section>
  </div>

  <!-- Dialog Box Appear -->

  <div>
    <q-dialog v-model="alert">
      <q-card class="download_report_size">
        <q-card-actions align="right">
          <q-btn flat dense round icon="close" v-close-popup
            ><q-tooltip> Close </q-tooltip></q-btn
          >
        </q-card-actions>

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <QSearch
                v-model="branch_id"
                label="Branch"
                option-value="id"
                option-label="name"
                data-store="branch"
                action="getItems"
                :multiple="false"
              ></QSearch>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="between">
          <q-btn flat label="Download Excel" no-caps @click="exportInExcel" />
          <q-btn flat label="Download PDF" no-caps @click="exportInPdf" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { defineComponent, ref } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

const EditInventory = defineAsyncComponent(() => import("./Edit.vue"));
const CreateInventory = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "InventoryIndexPage",

  components: {
    EditInventory,
    CreateInventory,
  },

  computed: {
    ...mapFields("inventory", ["filter.branch_id", "filter.search", "filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("inventory", ["showEditModal"]);
    const { showCreateModal } = getGetters("inventory", ["showCreateModal"]);

    return {
      hasEditPermission: true,
      dataStore: "inventory",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
      alert: ref(false),
    };
  },

  methods: {
    exportInExcel() {
      this.$store
        .dispatch(`${this.dataStore}/getReport`, {
          export_excel: 1,
          pagination: this.pagination,
        })
        .then((response) => {
          window.open(response.data.temp_url, "_system");
        })
        .catch((error) => {});
    },

    // Pdf download

    exportInPdf() {
      this.$store
        .dispatch(`${this.dataStore}/getReportPdf`, {
          export_excel: 1,
          pagination: this.pagination,
        })
        .then((response) => {
          window.open(response.data.temp_url, "_system");
        })
        .catch((error) => {});
    },
  },
});
</script>

<style scoped>
.inventory-form {
  width: 50%;
  max-width: 50%;
}

.download_report_size {
  width: 500px;
}
</style>
