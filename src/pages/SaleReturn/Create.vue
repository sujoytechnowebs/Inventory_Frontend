<template>
  <div>
    <q-card>
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="salereturn/createItem"
        :data-store="dataStore"
        title="Add Sale Return"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
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

          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
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

          <div class="col-12 col-sm-6 col-md-2 col-lg-2">
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

          <div class="col-12 col-sm-6 col-md-2 col-lg-2">
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

          <div class="col-12 col-sm-6 col-md-2 col-lg-2">
            <q-select
              outlined
              dense
              v-model="status"
              :options="sale_status"
              label="Status"
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

        <q-separator />

        <p class="sales-return-details-create-form-head q-pt-md">
          Product Details
        </p>
        <div class="q-pb-md">
          <addProducts v-model="sale_return_details" />
        </div>
        <div>
          <q-editor
            v-model="note"
            placeholder="Please Write The Notes For Purchase"
          />
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";

const addProducts = defineAsyncComponent(() =>
  import("./_components/AddProductDetails.vue")
);

export default {
  name: "SaleReturnCreatePage",

  components: {
    addProducts,
  },

  setup() {
    return {
      modal: ref(true),
      dataStore: "salereturn",
      validationErrors: ref({}),
      modelValue: ref(),
      sale_status: ["received", "delivered"],
      pays: ["bank", "cash"],
    };
  },

  computed: {
    ...mapFields("salereturn", [
      "newItem.customer_id",
      "newItem.branch",
      "newItem.date_of_return",
      "newItem.note",
      "newItem.payment_method",
      "newItem.status",
      "newItem.sale_return_details",
    ]),
  },
};
</script>

<style scoped>
.sales-return-details-create-form-head {
  font-size: 18px;
}
</style>
