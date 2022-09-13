<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="sale/createItem"
        :data-store="dataStore"
        title="Add Sales"
      >
        <q-separator class="q-mb-md" />
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <p class="head">Sell Details</p>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6 col-lg-6">
                <QSearch
                  v-model="customer_id"
                  label="Customer Name"
                  option-value="id"
                  option-label="name"
                  data-store="user"
                  action="getCustomer"
                  :multiple="false"
                  :error-message="$getValidationErrors('customer_id')"
                  :error="$hasValidationErrors('customer_id')"
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
            <div>
              <addSales v-model="salesDetails" />
            </div>
            <div class="q-my-md">
              <p>Notes:</p>
              <q-editor v-model="note">
                <q-card flat bordered>
                  <q-card-section v-html="editor" />
                </q-card>
              </q-editor>
            </div>

            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-4 col-lg-4">
                <div class="col-12 col-md-2 col-lg-2">
                  <q-input
                    dense
                    outlined
                    label="Date of Sales"
                    v-model="date_of_sales"
                    mask="date"
                    :error-message="$getValidationErrors('date_of_sales')"
                    :error="$hasValidationErrors('date_of_sales')"
                  >
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="date_of_sales">
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
              <div class="col-12 col-md-4 col-lg-4">
                <q-select
                  outlined
                  v-model="payment_method"
                  :options="payment"
                  label="Payment Method"
                  dense
                  :error-message="$getValidationErrors('payment_method')"
                  :error="$hasValidationErrors('payment_method')"
                ></q-select>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-select
                  outlined
                  v-model="status"
                  :options="options"
                  label="Status"
                  dense
                  :error-message="$getValidationErrors('status')"
                  :error="$hasValidationErrors('status')"
                ></q-select>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div v-if="payment_method === 'ewi'">
              <p class="head">Loan Details</p>

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

                <div class="col-12 col-md-6 col-lg-6">
                  <q-input
                    outlined
                    dense
                    v-model="application_received_date"
                    mask="date"
                    label="Application Receive Date"
                    :error-message="
                      $getValidationErrors('application_received_date')
                    "
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
                    :error-message="
                      $getValidationErrors('application_received_by')
                    "
                    :error="$hasValidationErrors('application_received_by')"
                  ></QSearch>
                </div>
              </div>
            </div>

            <div
              v-if="
                payment_method === 'cash' ||
                payment_method === 'bank' ||
                payment_method === 'due'
              "
            >
              <p class="head">Calculations</p>
              <q-card>
                <q-card-section>
                  <div class="row q-col-gutter-md">
                    <div class="col-6">
                      <q-input
                        dense
                        outlined
                        v-model="item_rate"
                        label="Product Name"
                      />
                    </div>
                    <div class="col-6">
                      <q-input
                        dense
                        outlined
                        v-model="text"
                        label="Product Rate"
                      />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

const addSales = defineAsyncComponent(() =>
  import("./_components/AddSalesDetails.vue")
);

export default {
  name: "SaleCreatePage",

  components: {
    addSales,
  },

  data() {
    return {
      modal: ref(true),
      dataStore: "sale",
      validationErrors: ref({}),
      modelValue: ref(),
      payment: ["cash", "bank", "due", "ewi"],
      options: ["received", "deliverd"],
      noEwi: ["25", "34", "40", "44", "52"],
    };
  },

  created() {
    this.branch_id = this.getActiveBranch;
  },

  computed: {
    ...mapFields("sale", [
      "newItem.customer_id",
      "newItem.branch_id",
      "newItem.date_of_sales",
      "newItem.payment_method",
      "newItem.note",
      "newItem.status",

      "newItem.application_received_date",
      "newItem.application_received_by",
      "newItem.ewi_start_date",
      "newItem.no_of_ewi",
      "newItem.loan_amount",
      "newItem.processing_fees",
      "newItem.down_payment",
    ]),
    ...mapGetters("auth", ["getActiveBranch"]),
  },
};
</script>

<style scoped>
.head {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
