<template>
  <div>
    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
        :columns="columns"
        :customBodySlot="true"
        :filter="filter"
        :canDelete="false"
        :canAdd="false"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-4 col-md-4"
          >
            EMI Management Table
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 row justify-end items-center">
            <div class="col-12 col-md-3 col-lg-3 q-pt-sm">
              <q-btn
                flat
                round
                dense
                icon="system_update_alt"
                class="q-ml-sm"
                @click="alert2 = true"
              >
                <q-tooltip> Collection Sheet </q-tooltip>
              </q-btn>
            </div>
            <div class="col-12 col-md-3 col-lg-3 q-pt-sm">
              <q-btn
                flat
                round
                dense
                icon="cloud_download"
                class="q-ml-sm"
                @click="alert = true"
              >
                <q-tooltip> Download Report </q-tooltip>
              </q-btn>
            </div>
            <!-- <div class="col-4">
              <q-btn
                label="Test Receipt"
                no-caps
                outline
                color="primary"
                @click="testPrint"
              >
              </q-btn>
            </div> -->

            <!-- Test By Sujoy -->

            <div class="col-12 col-md-3 col-lg-3 q-pt-lg q-pr-sm">
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

            <div class="col-12 col-md-3 col-lg-3 q-pt-sm">
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

          <!-- Collection Dialog Box Appear -->

          <div>
            <q-dialog v-model="alert2">
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
                    <!-- <div class="col-12">
                      <q-input
                        dense
                        label="Date"
                        outlined
                        v-model="date"
                        mask="date"
                        :error-message="$getValidationErrors('date')"
                        :error="$hasValidationErrors('date')"
                      >
                        <template v-slot:prepend>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              cover
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date v-model="date">
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
                    </div> -->

                    <div class="col-12">
                      <q-input
                        dense
                        outlined
                        v-model="groupId"
                        label="Group Code"
                        :error-message="$getValidationErrors('groupId')"
                        :error="$hasValidationErrors('groupId')"
                      ></q-input>
                    </div>
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="Download"
                    no-caps
                    @click="exportCollectionSheet"
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
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
                      <!-- <q-select
                        outlined
                        dense
                        v-model="status"
                        :options="options"
                        label="Status"
                        :error-message="$getValidationErrors('status')"
                        :error="$hasValidationErrors('status')"
                      ></q-select> -->

                      <q-select
                        outlined
                        dense
                        v-model="status"
                        :options="status_type"
                        label="Status"
                        option-value="value"
                        option-label="label"
                        option-disable="inactive"
                        emit-value
                        map-options
                        :error-message="$getValidationErrors('status')"
                        :error="$hasValidationErrors('status')"
                      ></q-select>
                    </div>

                    <div class="col-12">
                      <q-input
                        dense
                        label="EWI Date"
                        outlined
                        v-model="ewi_date_format"
                        :error-message="$getValidationErrors('ewi_date')"
                        :error="$hasValidationErrors('ewi_date')"
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
                        v-model="groupCode"
                        label="Group Code"
                        :error-message="$getValidationErrors('groupCode')"
                        :error="$hasValidationErrors('groupCode')"
                      ></q-input>
                    </div>
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <!-- <q-btn
                    flat
                    label="Download Excel"
                    no-caps
                    @click="exportInExcel"
                  /> -->
                  <q-btn flat label="Download" no-caps @click="exportInPdf" />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </template>

        <template v-slot:customBodySlot="bodyRow">
          <q-tr :props="bodyRow">
            <q-td key="loan_id">
              {{ bodyRow.row?.loan?.application_no }}
            </q-td>
            <q-td key="name">
              {{ bodyRow.row?.loan?.group_user?.user?.name }}
            </q-td>
            <q-td key="name">
              {{ bodyRow.row?.loan?.group_user?.user?.account?.branch?.name }}
            </q-td>
            <q-td key="emi_no">
              {{ bodyRow.row?.emi_no }}
            </q-td>
            <q-td key="emi_date">
              {{ $dateConvert.format(bodyRow.row.emi_date) }}
            </q-td>
            <q-td key="emi">
              {{ bodyRow.row?.emi_amount }}
            </q-td>
            <q-td key="status">
              <span v-if="bodyRow.row?.status === 'collected'">
                <q-chip color="positive" class="text-white">
                  {{ bodyRow.row?.status }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row?.status === 'partial_collected'">
                <q-chip color="blue-7" class="text-white">
                  Partial Collected
                </q-chip>
              </span>
              <span v-if="bodyRow.row?.status === 'due'">
                <q-chip color="red-7" class="text-white">
                  {{ bodyRow.row?.status }}
                </q-chip>
              </span>
            </q-td>
            <q-td key="collected_date">
              {{ $dateConvert.format(bodyRow.row.collected_date) }}
            </q-td>

            <q-td key="loanAmount">
              {{
                bodyRow.row?.loan?.loan_amount - bodyRow.row?.loan?.down_payment
              }}
            </q-td>

            <q-td key="payment" align="right">
              <span
                v-if="
                  bodyRow.row.status === 'due' ||
                  bodyRow.row.status === 'partial_collected'
                "
              >
                <!-- <q-btn
                  label="Instant Pay"
                  no-caps
                  flat
                  @click="instantPay(bodyRow.row.id)"
                  @click.prevent="
                    playSound(require('../../assets/sound/ringtone.mp3'))
                  "
                /> -->
              </span>

              <span v-if="bodyRow.row.status !== 'collected'">
                <q-btn
                  label="Make Payment"
                  no-caps
                  flat
                  @click="setEditModal(bodyRow.row)"
                >
                  <q-tooltip> Payment </q-tooltip>
                </q-btn>
              </span>
            </q-td>

            <q-td key="invoice" align="right">
              <!-- Test -->

              <span
                v-if="
                  bodyRow.row.status === 'due' ||
                  bodyRow.row.status === 'partial_collected'
                "
              >
                <q-btn
                  flat
                  round
                  dense
                  icon="receipt_long"
                  color="primary"
                  @click="invoicePrint(bodyRow.row)"
                >
                  <q-tooltip> EWI Invoice </q-tooltip>
                </q-btn>
              </span>
            </q-td>
          </q-tr>
        </template>

        <template v-slot:aditionalActions="props">
          <addpay v-bind:id="props.row.id" v-bind:status="props.row.status" />
        </template>
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'EWI-form' : ''">
          <CreateEWI v-bind:modal="true"></CreateEWI>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'EWI-form' : ''">
          <EditEWI v-bind:modal="true"></EditEWI>
        </div>
      </q-dialog>
    </q-card-section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { defineComponent, ref } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";
import { mapActions } from "vuex";

import { dateConvert } from "src/boot/dateConvert";

// import { dateConvert } from "src/boot/dateConvert";

const addpay = defineAsyncComponent(() => import("./_components/addpay.vue"));

const EditEWI = defineAsyncComponent(() => import("./Edit.vue"));
const CreateEWI = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "EwiIndexPage",

  components: {
    EditEWI,
    CreateEWI,
    addpay,
  },

  computed: {
    ...mapFields("emi", [
      "filter.status",
      "filter.ewi_date",
      "filter.group_code",
      "filter.search",
      "filter.groupCode",
      "filter.groupId",
      "filter.date",
      "filter",
    ]),

    ewi_date_format() {
      return this.$dateConvert.format(this.ewi_date);
    },
  },
  setup() {
    const { getGetters, getAction } = useStoreModule();
    const { showEditModal } = getGetters("emi", ["showEditModal"]);
    const { showCreateModal } = getGetters("emi", ["showCreateModal"]);

    const { instantPay } = getAction("emi", ["instantPay"]);

    // const testPrint = () => {
    //   router.push({
    //     path: "/print/ewi-receipt",
    //   });
    // };

    return {
      hasEditPermission: true,
      dataStore: "emi",
      aditionalActions: true,
      showEditModal,
      showCreateModal,
      // options: ["due", "collected"],
      status_type: [
        {
          value: "all",
          label: "All",
        },
        {
          value: "due",
          label: "Due",
        },
        {
          value: "collected",
          label: "Collected",
        },
      ],
      alert: ref(false),
      alert2: ref(false),
      instantPay,
      // testPrint,
    };
  },

  methods: {
    ...mapActions("emi", ["getItems"]),

    setEditModal(props) {
      this.$store.commit(`${this.dataStore}/setEditModal`, true);
      this.$store.commit(
        `${this.dataStore}/setEditItem`,
        Object.assign({}, props)
      );
    },

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

    // Collection Sheet download

    exportCollectionSheet() {
      this.$store
        .dispatch(`${this.dataStore}/getReportCollection`, {
          export_excel: 1,
          pagination: this.pagination,
        })
        .then((response) => {
          window.open(response.data.tempUrl, "_system");
        })
        .catch((error) => {});
    },

    // Invoice Print

    invoicePrint(row) {
      // .then((response) => {
      // });
      this.$store
        .dispatch(`${this.dataStore}/getReportInvoice`, {
          invoice_id: row.loan_id,
        })
        .then((response) => {
          this.$store.commit(`${this.dataStore}/setPrintData`, response.data);
          this.$router.push({ name: "emi-receipt" });
        })
        .catch((error) => {});
    },

    // Test

    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
  },
});
</script>

<style scoped>
.EWI-form {
  width: 50%;
  max-width: 50%;
}
</style>
