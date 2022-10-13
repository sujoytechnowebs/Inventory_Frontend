<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Approve Loan"
        closeModalMutation="showHideApproveModal"
      >
        <p class="form-heading q-pt-md">Branch Details</p>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="customers_id"
              label="Customer Name"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getItems"
              :multiple="false"
              readonly
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
              readonly
            ></QSearch>
          </div>
        </div>
        <q-separator />
        <p class="head q-pt-md">Loan Details</p>
        <div class="row q-mb-md q-col-gutter-md">
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
                    : 'Please Choose The EWI Start Date',
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
            <q-input
              ref="no_of_ewi"
              outlined
              v-model="no_of_ewi"
              dense
              type="number"
              label="Number Of EWI"
              readonly
            >
            </q-input>
          </div>

          <div class="col-12">
            <q-input
              ref="loan_amount"
              outlined
              v-model="loan_amount"
              dense
              type="number"
              label="Loan Amount"
              readonly
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
              readonly
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
              readonly
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
                    : 'Please Write the down payment',
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
              readonly
            ></QSearch>
          </div>
        </div>
        <q-separator />
        <p class="head q-pt-md">Application Verification</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              outlined
              dense
              v-model="application_verified_date"
              mask="date"
              label="Application Verified Date"
              :rules="[
                (val) =>
                  (val && !validationErrors.application_verified_date > 0) ||
                  validationErrors.application_verified_date
                    ? validationErrors.application_verified_date
                    : 'Please Choose The Application Verification Date',
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
                    <q-date v-model="application_verified_date">
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
              v-model="application_verified_by"
              label="Application Verified By"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getItems"
              :multiple="false"
              readonly
            ></QSearch>
          </div>
        </div>
        <q-separator />
        <p class="head q-pt-md">Application Approval</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              outlined
              dense
              v-model="application_approve_date"
              mask="date"
              label="Application Approve Date"
              :rules="[
                (val) =>
                  (val && !validationErrors.application_approve_date > 0) ||
                  validationErrors.application_approve_date
                    ? validationErrors.application_approve_date
                    : 'Please Choose The Application Approved Date',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="application_approve_date">
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
              v-model="application_approved_by"
              label="Application Approved By"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getItems"
              :multiple="false"
            ></QSearch>
          </div>
          <div class="col-12">
            <q-select
              outlined
              v-model="status"
              dense
              :options="options"
              label="Status"
            ></q-select>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "LoansApprovePage",
  setup() {
    return {
      modal: true,
      dataStore: "loan",
      saveaction: "loan/approveUpdate",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Approved", "Reject"],
    };
  },
  computed: {
    ...mapFields("loan", [
      "approveItem.customers_id",
      "approveItem.branch_id",
      "approveItem.application_received_date",
      "approveItem.application_received_by",
      "approveItem.application_verified_date",
      "approveItem.application_verified_by",
      "approveItem.application_approve_date",
      "approveItem.application_approved_by",
      "approveItem.ewi_start_date",
      "approveItem.no_of_ewi",
      "approveItem.loan_amount",
      "approveItem.processing_fees",
      "approveItem.down_payment",
      "approveItem.status",
    ]),
  },
};
</script>

<style scoped>
.form-heading {
  font-size: 20px;
}
</style>
