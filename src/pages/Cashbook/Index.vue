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
        :canEdit="false"
        :canDelete="false"
        :canAdd="false"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            CashBook Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <div class="col-12">
              <q-btn
                label="Download Report"
                no-caps
                outline
                color="primary"
                @click="alert = true"
              >
              </q-btn>
            </div>
          </div>

          <!-- Dialog Box Appear -->

          <div>
            <q-dialog v-model="alert">
              <q-card>
                <q-card-actions align="right">
                  <q-btn
                    flat
                    round
                    dense
                    icon="close"
                    color="primary"
                    v-close-popup
                  >
                    <q-tooltip> Close </q-tooltip>
                  </q-btn>
                </q-card-actions>

                <q-card-section>
                  <div class="row q-col-gutter-md">
                    <div class="col-12">
                      <q-select
                        outlined
                        dense
                        v-model="status"
                        :options="options"
                        label="Status"
                        :rules="[
                          (val) =>
                            (val && !validationErrors.status > 0) ||
                            validationErrors.status
                              ? validationErrors.status
                              : 'Please Choose The Status',
                        ]"
                      ></q-select>
                    </div>

                    <div class="col-12">
                      <q-input
                        dense
                        label="EWI Date"
                        outlined
                        v-model="ewi_date"
                        mask="date"
                        :rules="[
                          (val) =>
                            (val && !validationErrors.ewi_date > 0) ||
                            validationErrors.ewi_date
                              ? validationErrors.ewi_date
                              : 'Please Choose The EWI Date',
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              cover
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date v-model="ewi_date">
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>

                    <div class="col-12">
                      <q-input
                        dense
                        outlined
                        v-model="group_code"
                        label="Group Code"
                        :rules="[
                          (val) =>
                            (val && !validationErrors.group_code > 0) ||
                            validationErrors.group_code
                              ? validationErrors.group_code
                              : 'Please Write The Group Code',
                        ]"
                      ></q-input>
                    </div>
                  </div>
                </q-card-section>

                <q-card-actions align="between">
                  <q-btn
                    flat
                    label="Download Excel"
                    no-caps
                    @click="exportInExcel"
                  />
                  <q-btn
                    flat
                    label="Download PDF"
                    no-caps
                    @click="exportInPdf"
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </template>
      </QDataTable>
    </q-card-section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

export default defineComponent({
  name: "IndexPage",

  components: {},

  computed: {
    ...mapFields("cashbook", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();

    return {
      hasEditPermission: true,
      dataStore: "cashbook",
      aditionalActions: false,
    };
  },

  methods: {
    exportInExcel() {
      // console.log("export pdf");
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
      // console.log("export pdf");
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
.branch-form {
  width: 80%;
  max-width: 80%;
}
</style>
