<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Details"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <QSearch
              v-model="branch_id"
              label="Branch Name"
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
                    : 'Please Choose The Branch',
              ]"
            ></QSearch>
          </div>
          <div class="col-12">
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
                  (val && !validationErrors.product_id > 0) ||
                  validationErrors.product_id
                    ? validationErrors.product_id
                    : 'Please Choose The Product',
              ]"
            ></QSearch>
          </div>
          <div class="col-12">
            <q-input
              ref="quantity"
              outlined
              v-model="quantity"
              dense
              type="number"
              label="Number of quantity"
              :rules="[
                (val) =>
                  (val && !validationErrors.quantity > 0) ||
                  validationErrors.quantity
                    ? validationErrors.quantity
                    : 'Please write the Quantity',
              ]"
            >
            </q-input>
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
  name: "InventoryEditPage",
  computed: {
    ...mapFields("inventory", [
      "editItem.branch_id",
      "editItem.product_id",
      "editItem.quantity",
    ]),
  },
  setup() {
    return {
      modal: true,
      dataStore: "inventory",
      saveaction: "inventory/updateItem",
      validationErrors: ref({}),
    };
  },
};
</script>
