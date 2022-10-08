<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Verify Loan"
        closeModalMutation="showHideVerifyModal"
      >
        <q-separator />
        <p class="form-heading q-pt-md">Branch Details</p>
        <div class="row q-mb-lg q-col-gutter-md">
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
              :rules="[
                (val) =>
                  (val && !validationErrors.no_of_ewi > 0) ||
                  validationErrors.no_of_ewi
                    ? validationErrors.no_of_ewi
                    : 'Please Write the number of EWI',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.loan_amount > 0) ||
                  validationErrors.loan_amount
                    ? validationErrors.loan_amount
                    : 'Please Write the Loan Amount',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.down_payment > 0) ||
                  validationErrors.down_payment
                    ? validationErrors.down_payment
                    : 'Please Write the down payment',
              ]"
              readonly
            >
            </q-input>
          </div>
        </div>
        <q-separator />
        <p class="head q-pt-md">Application Receive</p>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="application_received_date"
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
                    : 'Please Write The Application Receive Date',
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
              :rules="['date']"
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

export default {
  name: "LoansVerifyPage",
  setup() {
    return {
      modal: true,
      dataStore: "loan",
      saveaction: "loan/verifyUpdate",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Varified", "Applied", "Reject"],
    };
  },
  computed: {
    ...mapFields("loan", [
      "verifyItem.customers_id",
      "verifyItem.branch_id",
      "verifyItem.application_received_date",
      "verifyItem.application_received_by",
      "verifyItem.application_verified_date",
      "verifyItem.application_verified_by",
      "verifyItem.ewi_start_date",
      "verifyItem.no_of_ewi",
      "verifyItem.loan_amount",
      "verifyItem.down_payment",
      "verifyItem.status",
    ]),
  },
};
</script>

<style scoped>
.form-heading {
  font-size: large;
}
</style>
