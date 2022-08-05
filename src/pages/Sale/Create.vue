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
          <div class="col-12 col-md-8 col-lg-8">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6 col-lg-6">
                <QSearch
                  v-model="customer_id"
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
                  v-model="loan_id"
                  label="Loan Application Number"
                  option-value="id"
                  option-label="application_no"
                  data-store="loan"
                  action="getItems"
                  :multiple="false"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.branch_id > 0) ||
                      validationErrors.branch_id
                        ? validationErrors.branch_id
                        : 'Please choose the Branch name',
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
                      (val && !validationErrors.state_id > 0) ||
                      validationErrors.state_id
                        ? validationErrors.state_id
                        : 'Please choose the Branch name',
                  ]"
                ></QSearch>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-input
                  dense
                  outlined
                  placeholder="Date of Sales"
                  v-model="date_of_sales"
                  mask="date"
                  :rules="['date']"
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
            <div class="row q-mt-md q-mb-md q-col-gutter-md">
              <div class="col-12">
                <q-editor v-model="note">
                  <q-card flat bordered>
                    <q-card-section v-html="editor" />
                  </q-card>
                </q-editor>
              </div>
            </div>
            <div class="row q-mt-md q-mb-md q-col-gutter-md">
              <div class="col-12 col-md-6 col-lg-6">
                <q-select
                  outlined
                  v-model="payment_method"
                  :options="payment"
                  label="Payment Method"
                  dense
                  :rules="[
                    (val) =>
                      (val && !validationErrors.payment_method > 0) ||
                      validationErrors.payment_method
                        ? validationErrors.payment_method
                        : 'Please Choose The Payment Method',
                  ]"
                ></q-select>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-select
                  outlined
                  v-model="status"
                  :options="options"
                  label="Status"
                  dense
                  :rules="[
                    (val) =>
                      (val && !validationErrors.status > 0) ||
                      validationErrors.status
                        ? validationErrors.status
                        : 'Please Choose The Status',
                  ]"
                ></q-select>
              </div>
            </div>

            <!-- Sales Details Portion is added here -->

            <div>
              <addSales v-model="salesDetails" />
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <p class="total_cost_head">Total Cost</p>
              </div>
              <div class="col-4">
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="col-8">
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="col-4">
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="col-8">
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="col-4">
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="col-8">
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="col-4">
                <p class="total_cost_head">SubTotal</p>
              </div>
              <div class="col-8">
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
  text-align: center;
  font-size: 20px;
}
</style>
