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
