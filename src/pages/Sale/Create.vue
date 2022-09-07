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
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-9 col-lg-9 scroll-bar q-pr-sm">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 col-md-3 col-lg-3">
                <QSearch
                  v-model="customer_id"
                  label="Customer Name"
                  option-value="id"
                  option-label="name"
                  data-store="user"
                  action="getItems"
                  :multiple="false"
                  :error-message="$getValidationErrors('customer_id')"
                  :error="$hasValidationErrors('customer_id')"
                ></QSearch>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <QSearch
                  v-model="loan_id"
                  label="Loan Application Number"
                  option-value="id"
                  option-label="application_no"
                  data-store="loan"
                  action="getItems"
                  :multiple="false"
                  :error-message="$getValidationErrors('loan_id')"
                  :error="$hasValidationErrors('loan_id')"
                ></QSearch>
              </div>
              <div class="col-12 col-sm-6 col-md-3 col-lg-3">
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
              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
                <q-input
                  dense
                  outlined
                  placeholder="Date of Sales"
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
              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
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
              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
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
            <div>
              <addSales v-model="salesDetails" />
            </div>
            <div class="q-my-sm">
              <q-editor v-model="note">
                <q-card flat bordered>
                  <q-card-section v-html="editor" />
                </q-card>
              </q-editor>
            </div>
          </div>
          <div class="col-12 col-md-3 col-lg-3">
            <div class="column">
              <div class="flex justify-between">
                <p class="total_cost_head">Total Cost</p>
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="flex justify-between">
                <p class="total_cost_head">Total Cost</p>
                <p class="total_cost_head">SubTotal</p>
              </div>
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
    ]),
    ...mapGetters("auth", ["getActiveBranch"]),
  },
};
</script>

<style scoped>
.total_cost_head {
  font-size: 14px;
}

.scroll-bar {
  max-height: 79vh !important;
  overflow: scroll;
}
</style>
