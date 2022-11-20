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
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Loan Management Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <div class="col-6">
              <q-btn
                label="Disburse Report"
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
        <template v-slot:aditionalActions="actionsRow">
          <span v-if="actionsRow.row.status === 'Applied'">
            <q-btn
              flat
              dense
              color="green-10"
              class="q-ml-sm"
              icon="task_alt"
              round
              @click="OnVerify(actionsRow.row)"
            >
              <q-tooltip>
                {{ $t("Verify") }}
              </q-tooltip>
            </q-btn>
          </span>

          <span v-if="actionsRow.row.status === 'Varified'">
            <q-btn
              flat
              color="green-10"
              class="q-ml-sm"
              icon="task"
              round
              @click="OnApprove(actionsRow.row)"
            >
              <q-tooltip>
                {{ $t("Approve") }}
              </q-tooltip>
            </q-btn>
          </span>

          <span v-if="actionsRow.row.status === 'proposed'">
            <q-btn
              flat
              color="green-10"
              class="q-ml-sm"
              icon="task"
              round
              @click="OnDisburse(actionsRow.row)"
            >
              <q-tooltip>
                {{ $t("Disburse") }}
              </q-tooltip>
            </q-btn>
          </span>

          <span v-if="actionsRow.row.status === 'Disbust'">
            <q-btn flat class="q-ml-sm" label="sale product" to="/sale">
            </q-btn>
          </span>

          <!-- Proposal Report -->

          <q-btn
            label="Proposal Report"
            no-caps
            flat
            @click="proposalReport(actionsRow.row.id)"
          />
        </template>
      </QDataTable>

      <q-dialog v-model="calculator">
        <div :class="$q.platform.is.desktop ? 'calculator' : ''">
          <q-card>
            <q-card-section>
              <div><Calculator /></div>
            </q-card-section>
          </q-card>
        </div>
      </q-dialog>

      <q-dialog v-model="showApproveModal">
        <div :class="$q.platform.is.desktop ? 'approve-form-width' : ''">
          <div><Approve /></div>
        </div>
      </q-dialog>
      <q-dialog v-model="showVerifyModal">
        <div :class="$q.platform.is.desktop ? 'verify-form-width' : ''">
          <div><Verify /></div>
        </div>
      </q-dialog>

      <q-dialog v-model="showDisburseModal">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <div><Disburse /></div>
        </div>
      </q-dialog>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'loan-create-form' : ''">
          <CreateLoan v-bind:modal="true"></CreateLoan>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'loan-create-form' : ''">
          <EditLoan v-bind:modal="true"></EditLoan>
        </div>
      </q-dialog>
    </q-card-section>
  </div>

  <!-- Dialog Box Appear -->

  <div>
    <q-dialog v-model="alert">
      <q-card class="my-card">
        <div class="bg-primary text-white">
          <q-card-actions align="between">
            <p class="dialog-head q-pt-md q-pl-sm">Disburse Report</p>
            <q-btn flat round dense icon="close" v-close-popup>
              <q-tooltip> Close </q-tooltip>
            </q-btn>
          </q-card-actions>
        </div>

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
            <div class="col-12">
              <q-input
                dense
                outlined
                v-model="from_date_format"
                label="From Date"
              >
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="fromDate">
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
              <q-input dense outlined v-model="to_date_format" label="To Date">
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="toDate">
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
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";
import { showHideCreateModal } from "src/store/Loan/mutations.js";
import { showHideApproveModal } from "src/store/Loan/mutations.js";
import { mapActions } from "vuex";

const EditLoan = defineAsyncComponent(() => import("./Edit.vue"));
const CreateLoan = defineAsyncComponent(() => import("./Create.vue"));

const Verify = defineAsyncComponent(() => import("./_components/verify.vue"));
const Approve = defineAsyncComponent(() => import("./_components/approve.vue"));

const Calculator = defineAsyncComponent(() =>
  import("./_components/calculator.vue")
);

const Disburse = defineAsyncComponent(() =>
  import("./_components/disburse.vue")
);

export default defineComponent({
  name: "LoanIndexPage",

  components: {
    EditLoan,
    CreateLoan,
    Verify,
    Approve,
    Disburse,
    Calculator,
  },

  computed: {
    ...mapFields("loan", [
      "filter.search",
      "filter.groupCode",
      "filter.fromDate",
      "filter.toDate",
      "filter",
    ]),
    from_date_format() {
      return this.$dateConvert.format(this.fromDate);
    },
    to_date_format() {
      return this.$dateConvert.format(this.toDate);
    },
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("loan", ["showEditModal"]);
    const { showCreateModal } = getGetters("loan", ["showCreateModal"]);
    const { showVerifyModal } = getGetters("loan", ["showVerifyModal"]);
    const { showApproveModal } = getGetters("loan", ["showApproveModal"]);
    const { showDisburseModal } = getGetters("loan", ["showDisburseModal"]);

    return {
      hasEditPermission: true,
      dataStore: "loan",
      aditionalActions: true,
      showEditModal,
      showCreateModal,
      showVerifyModal,
      showApproveModal,
      showDisburseModal,

      verify: ref(false),
      approve: ref(false),
      calculator: ref(false),
      cancel: ref(false),
      preview: ref(false),
      disburse: ref(false),

      alert: ref(false),
    };
  },

  methods: {
    ...mapActions("loan", ["getItems"]),

    OnVerify(payload) {
      console.log("on verify clicked", payload);
      this.$store.commit("loan/showHideVerifyModal", true);
      this.$store.commit("loan/setVerificationData", payload);
    },
    OnApprove(payload) {
      this.$store.commit("loan/showHideApproveModal", true);
      this.$store.commit("loan/setApproveData", payload);
    },

    OnDisburse(payload) {
      this.$store.commit("loan/showHideDisburseModal", true);
      this.$store.commit("loan/setDisburseData", payload);
    },

    download() {
      window.open(
        "http://127.0.0.1:8000/storage/media/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721_6.jpg.href",
        "_blank"
      );
    },

    // Proposal Report

    proposalReport(proposal_id) {
      this.$store
        .dispatch(`${this.dataStore}/getReportProposal`, {
          proposal_id: proposal_id,
        })
        .then((response) => {
          window.open(response.data.tempUrl, "_system");
        })
        .catch((error) => {});
    },

    // Disburse Report

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
          window.open(response.data.tempUrl, "_system");
        })
        .catch((error) => {});
    },
  },
});
</script>

<style scoped>
.loan-create-form {
  width: 70%;
  max-width: 70%;
}

.calculator {
  width: 40%;
  max-width: 40%;
}

.verify-form-width {
  width: 70%;
  max-width: 70%;
}

.approve-form-width {
  width: 70%;
  max-width: 70%;
}

.my-card {
  width: 100%;
  max-width: 400px;
}

.dialog-head {
  font-size: 1rem;
  font-weight: 500;
}
</style>
