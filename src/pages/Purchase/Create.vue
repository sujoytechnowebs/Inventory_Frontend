<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="purchase/createItem"
        :data-store="dataStore"
        title="Add Purchase"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
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
                  (val && !validationErrors.state_id > 0) ||
                  validationErrors.state_id
                    ? validationErrors.state_id
                    : 'Please choose the Branch name',
              ]"
            ></QSearch>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
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

          <div class="col-12 col-md-4 col-lg-4">
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

          <div class="col-12 col-md-4 col-lg-4">
            <q-select
              outlined
              dense
              v-model="status"
              :options="options"
              label="Status"
            ></q-select>
          </div>
          <div class="col-12 col-md-8 col-lg-8">
            <q-input ref="note" outlined v-model="note" dense label="Note">
            </q-input>
          </div>
        </div>

        <h5>Purchase Details</h5>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-8 col-lg-8">
            <QSearch
              v-model="product_id"
              label="Product Name"
              option-value="id"
              option-label="name"
              data-store="product"
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
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="item_rate"
              outlined
              v-model="item_rate"
              dense
              label="Product Rate"
              type="number"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="discount"
              outlined
              v-model="discount"
              dense
              label="Discount"
              type="number"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="quantity"
              outlined
              v-model="quantity"
              dense
              label="Number of Quantity"
              type="number"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="tax_class_id"
              label="Tax Name"
              option-value="id"
              option-label="name"
              data-store="tax"
              action="getItems"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.state_id > 0) ||
                  validationErrors.state_id
                    ? validationErrors.state_id
                    : 'Please Choose the Branch name',
              ]"
            ></QSearch>
          </div>
        </div>
        <q-btn color="white" text-color="black" label="Add Purchase Details" />
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "PurchaseCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "purchase",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Received", "Pending"],
    };
  },

  computed: {
    ...mapFields("purchase", [
      "newItem.vendor_id",
      "newItem.branch_id",
      "newItem.date_of_purchase",
      "newItem.note",
      "newItem.status",
      "newItem.product_id",
      "newItem.item_rate",
      "newItem.discount",
      "newItem.quantity",
      "newItem.tax_class_id",
    ]),
  },
};
</script>
