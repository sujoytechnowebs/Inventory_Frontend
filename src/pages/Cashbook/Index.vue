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
            Transaction Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
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

            <!-- <div class="col-6">
              <q-btn
                outline
                label="Transaction Details"
                color="primary"
                @click="alertNew = true"
              />
            </div> -->
            <!-- <div class="col">
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

              <q-select
                outlined
                dense
                v-model="account_type"
                :options="type_account"
                label="Account Type"
                option-value="value"
                option-label="label"
                option-disable="inactive"
                emit-value
                map-options
              />

              <q-input
                outlined
                dense
                v-model="fromDate"
                label="From Date"
                mask="date"
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

              <q-input
                outlined
                dense
                v-model="toDate"
                label="To Date"
                mask="date"
              >
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

              <QSearch
                v-model="branch_id"
                label="Branch"
                option-value="id"
                option-label="name"
                data-store="branch"
                action="getItems"
                :multiple="false"
              ></QSearch>
            </div> -->

            <!-- <div class="col-6">
              <q-btn
                outline
                label="Transaction Details"
                color="primary"
                @click="alertNew = true"
              />
            </div> -->
          </div>

          <!-- Test -->

          <div class="col-12 row select_border q-mt-md">
            <div class="col-12 col-md-3 col-lg-3 q-pt-md q-pl-md q-pr-md">
              <q-select
                outlined
                dense
                v-model="account_type"
                :options="type_account"
                label="Account Type"
                option-value="value"
                option-label="label"
                option-disable="inactive"
                emit-value
                map-options
                :error-message="$getValidationErrors('account_type')"
                :error="$hasValidationErrors('account_type')"
              />
            </div>
            <div class="col-12 col-md-3 col-lg-3 q-pt-md q-pl-md q-pr-md">
              <q-input
                outlined
                dense
                v-model="fromDate"
                label="From Date"
                mask="date"
                :error-message="$getValidationErrors('fromDate')"
                :error="$hasValidationErrors('fromDate')"
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
            <div class="col-12 col-md-3 col-lg-3 q-pt-md q-pl-md q-pr-md">
              <q-input
                outlined
                dense
                v-model="toDate"
                label="To Date"
                mask="date"
                :error-message="$getValidationErrors('toDate')"
                :error="$hasValidationErrors('toDate')"
              >
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
            <div class="col-12 col-md-3 col-lg-3 q-pt-md q-pl-md q-pr-md">
              <QSearch
                v-model="branch_id"
                label="Branch"
                option-value="id"
                option-label="name"
                data-store="branch"
                action="getItems"
                :multiple="false"
                :error-message="$getValidationErrors('branch_id')"
                :error="$hasValidationErrors('branch_id')"
              ></QSearch>
            </div>
          </div>

          <!-- Dialog Box Appear Another -->
          <div>
            <q-dialog v-model="alertNew">
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
                        v-model="account_type"
                        :options="type_account"
                        label="Account Type"
                        option-value="value"
                        option-label="label"
                        option-disable="inactive"
                        emit-value
                        map-options
                        :error-message="$getValidationErrors('account_type')"
                        :error="$hasValidationErrors('account_type')"
                      />
                    </div>
                    <div class="col-12">
                      <q-input
                        outlined
                        dense
                        v-model="fromDate"
                        label="From Date"
                        mask="date"
                        :error-message="$getValidationErrors('fromDate')"
                        :error="$hasValidationErrors('fromDate')"
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
                      <q-input
                        outlined
                        dense
                        v-model="toDate"
                        label="To Date"
                        mask="date"
                        :error-message="$getValidationErrors('toDate')"
                        :error="$hasValidationErrors('toDate')"
                      >
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
                    <div class="col-12">
                      <!-- <q-select
                        outlined
                        dense
                        v-model="transType"
                        :options="options"
                        label="Type"
                        option-value="value"
                        option-label="label"
                        option-disable="inactive"
                        emit-value
                        map-options

                      /> -->
                      <QSearch
                        v-model="branch_id"
                        label="Branch"
                        option-value="id"
                        option-label="name"
                        data-store="branch"
                        action="getItems"
                        :multiple="false"
                        :error-message="$getValidationErrors('branch_id')"
                        :error="$hasValidationErrors('branch_id')"
                      ></QSearch>
                    </div>
                  </div>
                </q-card-section>
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
                      <q-select
                        outlined
                        dense
                        v-model="account_type"
                        :options="type_account"
                        label="Account Type"
                        option-value="value"
                        option-label="label"
                        option-disable="inactive"
                        emit-value
                        map-options
                        :error-message="$getValidationErrors('account_type')"
                        :error="$hasValidationErrors('account_type')"
                      />
                    </div>
                    <div class="col-12">
                      <q-input
                        outlined
                        dense
                        v-model="fromDate"
                        label="From Date"
                        mask="date"
                        :error-message="$getValidationErrors('fromDate')"
                        :error="$hasValidationErrors('fromDate')"
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
                      <q-input
                        outlined
                        dense
                        v-model="toDate"
                        label="To Date"
                        mask="date"
                        :error-message="$getValidationErrors('toDate')"
                        :error="$hasValidationErrors('toDate')"
                      >
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
                    <div class="col-12">
                      <!-- <q-select
                        outlined
                        dense
                        v-model="transType"
                        :options="options"
                        label="Type"
                        option-value="value"
                        option-label="label"
                        option-disable="inactive"
                        emit-value
                        map-options

                      /> -->
                      <QSearch
                        v-model="branch_id"
                        label="Branch"
                        option-value="id"
                        option-label="name"
                        data-store="branch"
                        action="getItems"
                        :multiple="false"
                        :error-message="$getValidationErrors('branch_id')"
                        :error="$hasValidationErrors('branch_id')"
                      ></QSearch>
                    </div>
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Download" no-caps @click="exportInExcel" />
                  <!-- <q-btn
                    flat
                    label="Download PDF"
                    no-caps
                    @click="exportInPdf"
                  /> -->
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
import { defineComponent, ref } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

export default defineComponent({
  name: "CashBookIndexPage",

  components: {},

  computed: {
    ...mapFields("cashbook", [
      "filter.account_type",
      "filter.fromDate",
      "filter.toDate",
      "filter.branch_id",
      "filter",
    ]),
  },
  setup() {
    const { getGetters } = useStoreModule();

    return {
      hasEditPermission: true,
      dataStore: "cashbook",
      aditionalActions: false,
      alert: ref(false),
      alertNew: ref(false),
      options: [
        {
          label: "All",
          value: "all",
        },
        {
          label: "Debit",
          value: "debit",
        },
        {
          label: "Credit",
          value: "credit",
        },
      ],
      type_account: [
        {
          label: "Bank",
          value: "bank",
        },
        {
          label: "Cash",
          value: "cash",
        },
      ],
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

<style scoped>
.select_border {
  border-style: solid;
  border-width: 1px;
}
</style>
