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
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-4 col-md-4"
          >
            Loan Management Table
          </div>
          <div
            class="text-h6 text-weight-bold q-mt-sm q-mb-sm text-grey-8 col-xs-12 col-sm-4 col-md-4"
          >
            <q-btn
              color="purple"
              label="Calculator"
              @click="calculator = true"
            />
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 row justify-end items-center">
            <div class="col-12">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter.search"
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

          <span v-if="actionsRow.row.status === 'Approved'">
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
          <CreateUser v-bind:modal="true"></CreateUser>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'loan-create-form' : ''">
          <EditUser v-bind:modal="true"></EditUser>
        </div>
      </q-dialog>
    </q-card-section>
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

const EditUser = defineAsyncComponent(() => import("./Edit.vue"));
const CreateUser = defineAsyncComponent(() => import("./Create.vue"));

const Verify = defineAsyncComponent(() => import("./_components/verify.vue"));
const Approve = defineAsyncComponent(() => import("./_components/approve.vue"));

const Calculator = defineAsyncComponent(() =>
  import("./_components/calculator.vue")
);

const Disburse = defineAsyncComponent(() =>
  import("./_components/disburse.vue")
);

export default defineComponent({
  name: "IndexPage",

  components: {
    EditUser,
    CreateUser,
    Verify,
    Approve,
    Disburse,
    Calculator,
  },

  computed: {
    ...mapFields("loan", ["filter"]),
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
    };
  },

  methods: {
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
</style>
