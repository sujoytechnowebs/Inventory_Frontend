<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="product/createItem"
        :data-store="dataStore"
        title="Add Products"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Product Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.name > 0) || validationErrors.name
                    ? validationErrors.name
                    : 'Please write the product name',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.category_id > 0) ||
                  validationErrors.category_id
                    ? validationErrors.category_id
                    : 'Please choose the state name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="barcode"
              outlined
              v-model="barcode"
              dense
              label="Barcode"
              :rules="[
                (val) =>
                  (val && !validationErrors.barcode > 0) ||
                  validationErrors.barcode
                    ? validationErrors.barcode
                    : 'Please write the Barcode of the product',
              ]"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="sale_price"
              outlined
              type="number"
              v-model="sale_price"
              dense
              label="Sale Price"
              :rules="[
                (val) =>
                  (val && !validationErrors.sale_price > 0) ||
                  validationErrors.sale_price
                    ? validationErrors.sale_price
                    : 'Please write the Sale Price',
              ]"
            >
            </q-input>
          </div>
          <div class="col-12">
            <q-editor
              placeholder="Please write the product description."
              v-model="item_description"
              min-height="5rem"
              :rules="[
                (val) =>
                  (val && !validationErrors.item_description > 0) ||
                  validationErrors.item_description
                    ? validationErrors.item_description
                    : 'Please write the Product Description',
              ]"
            ></q-editor>
            <q-card flat bordered>
              <q-card-section v-html="editor" />
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

export default {
  name: "ProductsCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "product",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("product", [
      "newItem.name",
      "newItem.category_id",
      "newItem.barcode",
      "newItem.sale_price",
      "newItem.item_description",
    ]),
  },
};
</script>
