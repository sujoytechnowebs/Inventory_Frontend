<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="inventory/createItem"
        :data-store="dataStore"
        title="Add Details"
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
              :error-message="$getValidationErrors('branch_id')"
              :error="$hasValidationErrors('branch_id')"
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
              :error-message="$getValidationErrors('product_id')"
              :error="$hasValidationErrors('product_id')"
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
              :error-message="$getValidationErrors('quantity')"
              :error="$hasValidationErrors('quantity')"
            >
            </q-input>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "InventoryCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "inventory",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("inventory", [
      "newItem.branch_id",
      "newItem.product_id",
      "newItem.quantity",
    ]),
  },
};
</script>
