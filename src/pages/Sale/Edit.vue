<template>
  <div>
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        save-action="sale/updateItem"
        :data-store="dataStore"
        title="Update Sales"
      >
        <q-separator class="q-mb-md" />
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-8 col-lg-8 scroll-bar q-pr-md">
            <p class="head">Sell Details</p>
            <!-- Test Testing -->
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <div v-if="customer_id != null">
                  <q-input
                    outlined
                    dense
                    v-model="cust_type1"
                    label="Customer Type"
                    readonly
                  />
                </div>
                <div v-if="customer_name != null">
                  <q-input
                    outlined
                    dense
                    v-model="cust_type2"
                    label="Customer Type"
                    readonly
                  />
                </div>
              </div>
            </div>

            <!-- Test -->

            <div class="row q-col-gutter-md q-pb-md q-pt-md">
              <div class="col-12 col-md-6 col-lg-6">
                <div v-if="customer_name != null">
                  <q-input
                    outlined
                    dense
                    v-model="customer_name"
                    label="Customer Name"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <div v-if="customer_name != null">
                  <q-input
                    outlined
                    dense
                    v-model="customer_phone"
                    label="Customer Phone"
                    type="number"
                  />
                </div>
              </div>
              <div class="col-12">
                <div v-if="customer_name != null">
                  <q-input
                    outlined
                    dense
                    v-model="customer_address"
                    label="Customer Address"
                  />
                </div>
              </div>
            </div>

            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6 col-lg-6">
                <div v-if="customer_id != null">
                  <QSearch
                    v-model="customer_id"
                    label="Customer Name"
                    option-value="user_id"
                    option-label="customer_id"
                    data-store="user"
                    action="getSerialNo"
                    :multiple="false"
                    :error-message="$getValidationErrors('customer_id')"
                    :error="$hasValidationErrors('customer_id')"
                    @update:modelValue="onCustomerSelect"
                  ></QSearch>
                </div>
              </div>
            </div>

            <div class="row q-col-gutter-md">
              <div v-if="customer_id != null">
                <div class="col-12 col-md-3 col-lg-3">
                  <q-input
                    outlined
                    dense
                    v-model="name"
                    label="User Name"
                    readonly
                  />
                </div>
              </div>
              <div v-if="customer_id != null">
                <div class="col-12 col-md-3 col-lg-3">
                  <q-input
                    outlined
                    dense
                    v-model="monthly_income"
                    label="Monthly Income"
                    readonly
                  />
                </div>
              </div>

              <div v-if="customer_id != null">
                <div class="col-12 col-md-3 col-lg-3">
                  <q-input
                    outlined
                    dense
                    v-model="occupation"
                    label="Occupation"
                    readonly
                  />
                </div>
              </div>

              <div class="col-12 col-md-3 col-lg-3">
                <div v-if="branch_id != ''">
                  <QSearch
                    v-model="branch_id"
                    label="Branch"
                    option-value="id"
                    option-label="name"
                    data-store="branch"
                    action="getItems"
                    :multiple="false"
                    readonly
                    :error-message="$getValidationErrors('branch_id')"
                    :error="$hasValidationErrors('branch_id')"
                  ></QSearch>
                </div>
                <div v-if="branch_id === ''">
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
            </div>
            <div>
              <editSales v-model="salesDetails" />
            </div>
            <div class="col-12 q-py-lg">
              <p class="note_head">Notes For Sale:</p>

              <q-field
                :error-message="$getValidationErrors('note')"
                :error="$hasValidationErrors('note')"
              >
                <q-editor v-model="note" class="full-width"></q-editor>
              </q-field>
            </div>

            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-4 col-lg-4">
                <div class="col-12 col-md-2 col-lg-2">
                  <q-input
                    dense
                    outlined
                    label="Date of Sales"
                    v-model="view_date_of_sale"
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
                <div v-if="customer_id != null">
                  <q-select
                    outlined
                    v-model="payment_method"
                    :options="payment"
                    label="Payment Method"
                    dense
                    option-value="value"
                    option-label="label"
                    option-disable="inactive"
                    emit-value
                    map-options
                    :error-message="$getValidationErrors('payment_method')"
                    :error="$hasValidationErrors('payment_method')"
                  ></q-select>
                </div>

                <div v-if="customer_name != null">
                  <q-select
                    outlined
                    v-model="payment_method"
                    :options="non_payment"
                    label="Payment Method"
                    dense
                    option-value="value"
                    option-label="label"
                    option-disable="inactive"
                    emit-value
                    map-options
                    :error-message="$getValidationErrors('payment_method')"
                    :error="$hasValidationErrors('payment_method')"
                  ></q-select>
                </div>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-select
                  outlined
                  v-model="status"
                  :options="options"
                  label="Status"
                  dense
                  option-value="value"
                  option-label="label"
                  option-disable="inactive"
                  emit-value
                  map-options
                  :error-message="$getValidationErrors('status')"
                  :error="$hasValidationErrors('status')"
                ></q-select>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <div v-if="payment_method === 'ewi'">
              <p class="head">Loan Details</p>

              <div class="row q-col-gutter-md">
                <!-- Loan Rearrange -->

                <!-- Loan Amount -->

                <!-- EWI Start Date -->

                <div v-if="customer_id != null">
                  <div class="col-12 col-md-6 col-lg-6">
                    <q-input
                      outlined
                      dense
                      v-model="day"
                      label="Group Day"
                      readonly
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
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

                <!-- Processing Fess -->

                <div class="col-12 col-md-6 col-lg-6">
                  <q-input
                    ref="processing_fees"
                    outlined
                    type="number"
                    v-model="processing_fees"
                    dense
                    label="Processing Fees(%)"
                    :error-message="$getValidationErrors('processing_fees')"
                    :error="$hasValidationErrors('processing_fees')"
                    @update:modelValue="onProcessingFees"
                  >
                  </q-input>
                </div>

                <!-- Down Payment -->

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
                    @update:modelValue="onDownPayment"
                  >
                  </q-input>
                </div>

                <!-- Loan Amount -->

                <!-- No of EWI -->

                <div class="col-12 col-md-6 col-lg-6">
                  <q-select
                    outlined
                    v-model="no_of_ewi"
                    dense
                    :options="noEwi"
                    label="No. of EWI"
                    :error-message="$getValidationErrors('no_of_ewi')"
                    :error="$hasValidationErrors('no_of_ewi')"
                    @update:modelValue="onEWI"
                  ></q-select>
                </div>

                <!-- Receive Date -->

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

                <!-- Receive By -->

                <div class="col-12 col-md-6 col-lg-6">
                  <QSearch
                    v-model="application_received_by"
                    label="Application Receive"
                    option-value="users_id"
                    option-label="name"
                    data-store="user"
                    action="AllStaffs"
                    :multiple="false"
                    :error-message="
                      $getValidationErrors('application_received_by')
                    "
                    :error="$hasValidationErrors('application_received_by')"
                  ></QSearch>
                </div>

                <!-- Another Test -->
                <div class="q-pl-md">
                  <div v-if="grand_item_rate_total != ''">
                    <q-card class="my-card" flat bordered>
                      <q-card-section class="q-pt-md">
                        <div class="row q-col-gutter-md">
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Product Total Price:</span
                            >{{ grand_item_rate_total.toFixed(0) }}
                          </div>
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Loan Processing Fees:</span
                            >{{ loan_with_processing_fees.toFixed(0) }}
                          </div>
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Loan Amount:</span
                            >{{ loan_after_downpayment.toFixed(0) }}
                          </div>
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Amount Per EWI:</span
                            >{{ per_ewi.toFixed(0) }}
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>

            <!-- EMI Payment Method -->

            <div v-if="payment_method === 'emi'">
              <p class="head">Loan Details</p>

              <div class="row q-col-gutter-md">
                <!-- Loan Rearrange -->

                <!-- Loan Amount -->

                <!-- EWI Start Date -->

                <div v-if="customer_id != null">
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="col-12 col-md-6 col-lg-6">
                      <q-input
                        outlined
                        dense
                        v-model="EMIdate"
                        label="EMI Date"
                        readonly
                      />
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
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

                <!-- Processing Fess -->

                <div class="col-12 col-md-6 col-lg-6">
                  <q-input
                    ref="processing_fees"
                    outlined
                    type="number"
                    v-model="processing_fees"
                    dense
                    label="Processing Fees(%)"
                    :error-message="$getValidationErrors('processing_fees')"
                    :error="$hasValidationErrors('processing_fees')"
                    @update:modelValue="onProcessingFees"
                  >
                  </q-input>
                </div>

                <!-- Down Payment -->

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
                    @update:modelValue="onDownPayment"
                  >
                  </q-input>
                </div>

                <!-- Loan Amount -->

                <!-- No of EWI -->

                <div class="col-12 col-md-6 col-lg-6">
                  <q-select
                    outlined
                    v-model="no_of_ewi"
                    dense
                    :options="noEwi"
                    label="No. of EWI"
                    :error-message="$getValidationErrors('no_of_ewi')"
                    :error="$hasValidationErrors('no_of_ewi')"
                    @update:modelValue="onEWI"
                  ></q-select>
                </div>

                <!-- Receive Date -->

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

                <!-- Receive By -->

                <div class="col-12 col-md-6 col-lg-6">
                  <QSearch
                    v-model="application_received_by"
                    label="Application Receive"
                    option-value="users_id"
                    option-label="name"
                    data-store="user"
                    action="AllStaffs"
                    :multiple="false"
                    :error-message="
                      $getValidationErrors('application_received_by')
                    "
                    :error="$hasValidationErrors('application_received_by')"
                  ></QSearch>
                </div>

                <!-- Another Test -->
                <div class="q-pl-md">
                  <div v-if="grand_item_rate_total != ''">
                    <q-card class="my-card" flat bordered>
                      <q-card-section class="q-pt-md">
                        <div class="row q-col-gutter-md">
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Product Total Price:</span
                            >{{ grand_item_rate_total.toFixed(0) }}
                          </div>
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Loan Processing Fees:</span
                            >{{ loan_with_processing_fees.toFixed(0) }}
                          </div>
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Loan Amount:</span
                            >{{ loan_after_downpayment.toFixed(0) }}
                          </div>
                          <div class="col-12">
                            <span class="loan-details q-pr-sm"
                              >Amount Per EWI:</span
                            >{{ per_ewi.toFixed(0) }}
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
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
                      <p class="total_head">Total Cost:</p>
                    </div>
                    <div class="col-6">
                      {{ grand_item_rate_total }}
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

const editSales = defineAsyncComponent(() =>
  import("./_components/EditSaleDetails.vue")
);

export default {
  name: "SaleEditPage",

  components: {
    editSales,
  },

  data() {
    return {
      modal: ref(true),
      dataStore: "sale",
      validationErrors: ref({}),
      modelValue: ref(),
      noEwi: [15, 25, 35, 40, 45, 52],
      payment: [
        {
          value: "cash",
          label: "Cash",
        },
        {
          value: "bank",
          label: "Bank",
        },
        {
          value: "due",
          label: "Due",
        },
        {
          value: "ewi",
          label: "EWI",
        },
        {
          value: "emi",
          label: "EMI",
        },
      ],
      non_payment: [
        {
          value: "cash",
          label: "Cash",
        },
        {
          value: "bank",
          label: "Bank",
        },
      ],
      options: [
        {
          value: "received",
          label: "Received",
        },
        {
          value: "delivered",
          label: "Delivered",
        },
      ],
      // cust_option: [
      //   {
      //     value: "cust_non_regis",
      //     label: "Non Registered Customer",
      //   },
      //   {
      //     value: "cust_regis",
      //     label: "Registered Customer",
      //   },
      // ],
    };
  },

  created() {
    this.branch_id = this.getActiveBranch;
  },

  computed: {
    ...mapFields("sale", [
      "editItem.customer_id",
      "editItem.branch_id",
      "editItem.date_of_sales",
      "editItem.payment_method",
      "editItem.note",
      "editItem.status",
      "editItem.monthly_income",
      "editItem.application_received_date",
      "editItem.application_received_by",
      "editItem.ewi_start_date",
      "editItem.no_of_ewi",
      "editItem.loan_amount",
      "editItem.processing_fees",
      "editItem.down_payment",
      "editItem.calculations",
      "editItem.grand_item_rate_total",
      "editItem.loan_after_downpayment",
      "editItem.loan_with_processing_fees",
      "editItem.per_ewi",
      "editItem.occupation",
      "editItem.name",
      "editItem.customer_name",
      "editItem.customer_address",
      "editItem.customer_phone",
      "editItem.cust_type1",
      "editItem.cust_type2",
      "editItem.day",
    ]),
    ...mapGetters("auth", ["getActiveBranch"]),
    view_date_of_sale() {
      return this.$dateConvert.format(this.date_of_sales);
    },
  },
  methods: {
    ...mapActions("user", ["getItem"]),
    onDownPayment() {
      this.$store.commit(
        "sale/calculationAfterDownPaymentEdit",
        this.down_payment
      );
    },

    // Processing Fees

    onProcessingFees() {
      this.$store.commit(
        "sale/calculationAfterProcessingFeesEdit",
        this.processing_fees
      );
    },

    // EWI Calculation

    onEWI() {
      this.$store.commit("sale/ewicalculationEdit", this.no_of_ewi);
    },

    // Income Calculation

    // onIncome() {
    //   this.$store.getters("sale/incomesource", this.customer_id);
    // },

    onCustomerSelect() {
      console.log("on user select", this.customer_id);
      this.getItem(this.customer_id).then((response) => {
        this.monthly_income = response.data.user_group.monthly_income;
        this.occupation = response.data.user_group.occupation;
        this.name = response.data.name;
        this.day = response.data.user_group.group.day;
        this.EMIdate = response.data.user_group.group.EMIdate;
      });
    },
  },
};
</script>

<style>
.scroll-bar {
  max-height: 80vh !important;
  overflow: scroll;
}
</style>

<style scoped>
.head {
  font-size: 1.2rem;
  font-weight: 500;
}

.total_head {
  font-size: 1rem;
  font-weight: 500;
}

.loan-details {
  font-weight: 500;
  font-size: 1rem;
}
</style>
