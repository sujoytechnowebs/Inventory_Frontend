<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Loan"
      >
        <q-separator />
        <p class="head q-pt-md">Upload Your Identity</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-select
              outlined
              dense
              v-model="type"
              :options="identitytype"
              label="Identity Type"
              :rules="[
                (val) =>
                  (val && !validationErrors.type > 0) || validationErrors.type
                    ? validationErrors.type
                    : 'Please choose the Identity Type',
              ]"
            ></q-select>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-select
              outlined
              dense
              v-model="document_type"
              :options="documentType"
              label="Identity Proof"
              :rules="[
                (val) =>
                  (val && !validationErrors.document_type > 0) ||
                  validationErrors.document_type
                    ? validationErrors.document_type
                    : 'Please choose the Document proof',
              ]"
            ></q-select>
          </div>
        </div>
        <div class="col-12 q-pb-md">
          <q-uploader
            label="Upload Document/Image"
            square
            flat
            bordered
            class="full-width"
            :factory="factoryFn"
          />
        </div>
        <q-separator />
        <p class="head q-pt-md">Branch Details</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="customers_id"
              label="Customer Name"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getItems"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.customers_id > 0) ||
                  validationErrors.customers_id
                    ? validationErrors.customers_id
                    : 'Please choose the Customer name',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.branch_id > 0) ||
                  validationErrors.branch_id
                    ? validationErrors.branch_id
                    : 'Please choose the Branch name',
              ]"
              readonly
            ></QSearch>
          </div>
        </div>
        <q-separator />
        <p class="head q-pt-md">Loan Details</p>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col-12">
            <q-input
              outlined
              dense
              v-model="ewi_start_date"
              mask="date"
              label="EWI Start Date"
              :rules="[
                (val) =>
                  (val && !validationErrors.ewi_start_date > 0) ||
                  validationErrors.ewi_start_date
                    ? validationErrors.ewi_start_date
                    : 'Please Choose The EWI Starting Date',
              ]"
              readonly
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

          <div class="col-12">
            <q-select
              outlined
              v-model="no_of_ewi"
              dense
              :options="noEwi"
              label="Number of EWI"
              :rules="[
                (val) =>
                  (val && !validationErrors.no_of_ewi > 0) ||
                  validationErrors.no_of_ewi
                    ? validationErrors.no_of_ewi
                    : 'Please Choose The Number of EWI',
              ]"
            ></q-select>
          </div>

          <div class="col-12">
            <q-input
              ref="loan_amount"
              outlined
              v-model="loan_amount"
              dense
              type="number"
              label="Loan Amount"
              :rules="[
                (val) =>
                  (val && !validationErrors.loan_amount > 0) ||
                  validationErrors.loan_amount
                    ? validationErrors.loan_amount
                    : 'Please write number of Loan Amount',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12">
            <q-input
              ref="processing_fees"
              outlined
              type="number"
              v-model="processing_fees"
              dense
              label="Processing Fees"
              :rules="[
                (val) =>
                  (val && !validationErrors.processing_fees > 0) ||
                  validationErrors.processing_fees
                    ? validationErrors.processing_fees
                    : 'Please write the processing fees',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12">
            <q-input
              ref="down_payment"
              outlined
              type="number"
              v-model="down_payment"
              dense
              label="Down Payment"
              :rules="[
                (val) =>
                  (val && !validationErrors.down_payment > 0) ||
                  validationErrors.down_payment
                    ? validationErrors.down_payment
                    : 'Please write the Down Payment',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.application_received_date > 0) ||
                  validationErrors.application_received_date
                    ? validationErrors.application_received_date
                    : 'Please Choose The Application Receive Date',
              ]"
              readonly
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
              :rules="[
                (val) =>
                  (val && !validationErrors.application_received_by > 0) ||
                  validationErrors.application_received_by
                    ? validationErrors.application_received_by
                    : 'Please choose the User name',
              ]"
              readonly
            ></QSearch>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "LoansEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "loan",
      saveaction: "loan/updateItem",
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
      "editItem.customers_id",
      "editItem.branch_id",
      "editItem.application_received_date",
      "editItem.application_received_by",
      "editItem.ewi_start_date",
      "editItem.no_of_ewi",
      "editItem.loan_amount",
      "editItem.processing_fees",
      "editItem.down_payment",
      "editItem.status",
      "editItem.document_type",
      "editItem.type",
    ]),
  },

  methods: {
    ...mapActions("loan", ["media"]),

    factoryFn(files) {
      let formData = new FormData();
      formData.append("attachment_type", "document");
      formData.append("file", files[0]);
      return new Promise((resolve) => {
        this.mediaUpdate(formData)
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
