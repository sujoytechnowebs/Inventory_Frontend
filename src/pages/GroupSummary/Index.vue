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
        :canAdd="false"
        :canEdit="false"
        :canDelete="false"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Group Loan Summary
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <div class="col-6">
              <q-btn
                label="Download Summary"
                no-caps
                outline
                color="primary"
                @click="alert = true"
              >
              </q-btn>
            </div>
            <div class="col-6">
              <QSearch
                v-model="groupId"
                label="Group"
                option-value="id"
                option-label="name"
                data-store="group"
                action="getItems"
                :multiple="false"
                :error-message="$getValidationErrors('groupId')"
                :error="$hasValidationErrors('groupId')"
              ></QSearch>
            </div>
          </div>
        </template>
      </QDataTable>
    </q-card-section>
  </div>

  <!-- Dialog Box Appear -->

  <div>
    <q-dialog v-model="alert">
      <q-card class="my-card">
        <q-card-actions align="between">
          <p class="dialog-head q-pt-md q-pl-sm">Loan Summary</p>
          <q-btn flat round dense icon="close" color="primary" v-close-popup>
            <q-tooltip> Close </q-tooltip>
          </q-btn>
        </q-card-actions>

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                outlined
                dense
                v-model="groupCode"
                type="number"
                label="Group Code"
              />
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

export default defineComponent({
  name: "GroupSunnaryPage",

  components: {},

  computed: {
    ...mapFields("groupsummary", [
      "filter.search",
      "filter.groupId",
      "filter.groupCode",
      "filter",
    ]),
  },
  setup() {
    const { getGetters } = useStoreModule();

    return {
      hasEditPermission: true,
      dataStore: "groupsummary",
      aditionalActions: false,
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

<style>
.my-card {
  width: 100%;
  max-width: 250px;
}

.dialog-head {
  font-size: 1rem;
  font-weight: 500;
}
</style>
