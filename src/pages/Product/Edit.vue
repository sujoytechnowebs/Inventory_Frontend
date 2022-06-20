<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Products"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Product Name"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="category_id"
              label="Category"
              option-value="id"
              option-label="name"
              data-store="productcategory"
              action="getItems"
              :multiple="false"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="barcode"
              outlined
              v-model="barcode"
              dense
              label="Barcode"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="item_description"
              outlined
              v-model="item_description"
              dense
              label="Product Description"
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
  name: "ProductsEditPage",
  computed: {
    ...mapFields("product", [
      "editItem.name",
      "editItem.category_id",
      "editItem.barcode",
      "editItem.item_description",
    ]),
  },
  setup() {
    return {
      modal: true,
      dataStore: "product",
      saveaction: "product/updateItem",
      validationErrors: ref({}),
    };
  },
};
</script>
