<template>
  <div>
    <q-card>
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="loan/createItem"
        :data-store="dataStore"
        title="Add Loans"
      >
        <p class="head">Branch Details</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="customers_id"
              label="Customer Name"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getCustomer"
              :multiple="false"
              :error-message="$getValidationErrors('customers_id')"
              :error="$hasValidationErrors('customers_id')"
            ></QSearch>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
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
        <q-separator />
        <p class="head q-pt-md">Loan Details</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              outlined
              dense
              v-model="ewi_start_date"
              mask="date"
              label="EWI Start Date"
              :error-message="$getValidationErrors('ewi_start_date')"
              :error="$hasValidationErrors('ewi_start_date')"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="ewi_start_date">
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

          <div class="col-12 col-md-4 col-lg-4">
            <q-select
              outlined
              v-model="no_of_ewi"
              dense
              :options="noEwi"
              label="No. of EWI"
              :error-message="$getValidationErrors('no_of_ewi')"
              :error="$hasValidationErrors('no_of_ewi')"
            ></q-select>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="loan_amount"
              outlined
              v-model="loan_amount"
              dense
              type="number"
              label="Loan Amount"
              :error-message="$getValidationErrors('loan_amount')"
              :error="$hasValidationErrors('loan_amount')"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="processing_fees"
              outlined
              type="number"
              v-model="processing_fees"
              dense
              label="Processing Fees"
              :error-message="$getValidationErrors('processing_fees')"
              :error="$hasValidationErrors('processing_fees')"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="down_payment"
              outlined
              type="number"
              v-model="down_payment"
              dense
              label="Down Payment"
              :error-message="$getValidationErrors('down_payment')"
              :error="$hasValidationErrors('down_payment')"
            >
            </q-input>
          </div>
        </div>
        <q-separator />
        <p class="head q-pt-md">Application Receive</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              outlined
              dense
              v-model="application_received_date"
              mask="date"
              label="Application Receive Date"
              :error-message="$getValidationErrors('application_received_date')"
              :error="$hasValidationErrors('application_received_date')"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="application_received_date">
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

          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="application_received_by"
              label="Application Receive"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('application_received_by')"
              :error="$hasValidationErrors('application_received_by')"
            ></QSearch>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "LoanCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "loan",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Receive", "Accept", "Disburse", "Cancel"],
      identitytype: ["Identity Proof", "Residential"],
      documentType: [
        "Voter Id",
        "Aadhaar Id",
        "Pan Id",
        "Driving Licence",
        "Others",
      ],
      noEwi: ["25", "34", "44", "52"],
    };
  },

  computed: {
    ...mapFields("loan", [
      "newItem.customers_id",
      "newItem.branch_id",
      "newItem.application_received_date",
      "newItem.application_received_by",
      "newItem.ewi_start_date",
      "newItem.no_of_ewi",
      "newItem.loan_amount",
      "newItem.processing_fees",
      "newItem.down_payment",
      "newItem.status",
      "newItem.document_type",
      "newItem.type",
    ]),
  },

  methods: {
    ...mapActions("loan", ["media"]),

    factoryFn(files) {
      let formData = new FormData();
      formData.append("attachment_type", "document");
      formData.append("file", files[0]);
      return new Promise((resolve) => {
        this.media(formData)
          .then((res) => {
            resolve({
              url: res.data.media.url,
            });
          })
          .finally(() => {});
      });
    },
  },
};
</script>

<style scoped>
.head {
  font-size: 1rem;
}
</style>
