<template>
  <div>
    <q-card class="scroll flat">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="purchase/createItem"
        :data-store="dataStore"
        title="Add Purchase"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-8 col-md-9 col-lg-9 scroll-bar q-pr-md">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-3 col-lg-3">
                <QSearch
                  v-model="vendor_id"
                  label="Vendor Name"
                  option-value="id"
                  option-label="name"
                  data-store="user"
                  action="getItems"
                  :multiple="false"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.vendor_id > 0) ||
                      validationErrors.vendor_id
                        ? validationErrors.vendor_id
                        : 'Please choose the Vendor name',
                  ]"
                ></QSearch>
              </div>
              <div class="col-12 col-md-3 col-lg-3">
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
              <div class="col-12 col-md-2 col-lg-2">
                <q-input
                  outlined
                  v-model="date_of_purchase"
                  mask="date"
                  placeholder="Purchase Date"
                  dense
                  :rules="['date']"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date_of_purchase">
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
              <div class="col-12 col-md-2 col-lg-2">
                <q-select
                  outlined
                  v-model="payment_method"
                  dense
                  :options="pays"
                  label="Payment Methods"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.payment_method > 0) ||
                      validationErrors.payment_method
                        ? validationErrors.payment_method
                        : 'Please Write the notes',
                  ]"
                ></q-select>
              </div>
              <div class="col-12 col-md-2 col-lg-2">
                <q-select
                  outlined
                  dense
                  v-model="status"
                  :options="options"
                  label="Status"
                ></q-select>
              </div>
            </div>

            <div class="column">
              <p class="purchase-details-create-form-head q-pt-md">
                Product Details
              </p>
              <addProducts v-model="purchase_details" />
            </div>

            <div class="col-12 q-py-md">
              <q-editor
                v-model="note"
                placeholder="Please Write The Notes For Purchase"
              />
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-3">
            <q-card flat bordered>
              <q-card-section>
                <div class="row justify-between">
                  <div class="col-6">
                    <p class="q-ma-none text-weight-medium">Rate :</p>
                  </div>
                  <div class="col-6 text-right">
                    <p>2.55%</p>
                  </div>
                </div>
                <div class="row justify-between">
                  <div class="col-6">
                    <p class="q-ma-none text-weight-medium">Discount :</p>
                  </div>
                  <div class="col-6 text-right">
                    <p>20%</p>
                  </div>
                </div>
                <div class="row justify-between">
                  <div class="col-6">
                    <p class="q-ma-none text-weight-medium">Quantity :</p>
                  </div>
                  <div class="col-6 text-right">
                    <p>200</p>
                  </div>
                </div>
                <div class="row justify-between">
                  <div class="col-6">
                    <p class="q-ma-none text-weight-medium">Sales :</p>
                  </div>
                  <div class="col-6 text-right">
                    <p>100</p>
                  </div>
                </div>

                <div class="q-py-sm">
                  <q-separator />
                </div>
                <div class="row justify-between">
                  <div class="col-6">
                    <p class="q-ma-none text-weight-medium">Grand Total :</p>
                  </div>
                  <div class="col-6 text-right">
                    <p>30</p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
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
import AddSalesDetailsVue from "../Sale/_components/AddSalesDetails.vue";

const addProducts = defineAsyncComponent(() =>
  import("./_components/AddProductDetails.vue")
);

export default {
  name: "PurchaseCreatePage",

  components: {
    addProducts,
  },

  setup() {
    function calculate() {
      this.result = parseFloat(this.item_rate) - 2;
    }

    return {
      modal: ref(true),
      dataStore: "purchase",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Received", "Pending"],
      pays: ["bank", "cash"],
      calculate,
    };
  },

  computed: {
    ...mapFields("purchase", [
      "newItem.vendor_id",
      "newItem.branch_id",
      "newItem.date_of_purchase",
      "newItem.note",
      "newItem.status",
      "newItem.payment_method",
      "newItem.purchase_details",
    ]),
  },
};
</script>

<style scoped>
.purchase-details-create-form-head {
  font-size: 16px;
}

.scroll-bar {
  max-height: 79vh !important;
  overflow: scroll;
}
</style>
